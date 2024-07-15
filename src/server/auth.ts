import { PrismaAdapter } from "@auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import { db } from "@/server/db";
import Credentials from "next-auth/providers/credentials";
import { hashPassword } from "@/lib/hash-password";
import { type DefaultJWT, type JWT } from "next-auth/jwt";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      name: string;
      email: string;
      birthPlace: string;
      birthDate: Date;
    } & DefaultSession["user"];
  }

  interface User {
    // ...other properties
    id: string;
    name: string;
    email: string;
    birthPlace: string;
    birthDate: Date;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    name: string;
    email: string;
    birthPlace: string;
    birthDate: Date;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    jwt: ({ token }) => {
      return {
        ...token,
        id: token.id,
      };
    },
    session: async ({ token, session, user }) => {
      const userDb = await db.user.findUnique({
        where: {
          email: token.email,
        },
      });

      return {
        ...session,
        user: {
          ...session.user,
          id: userDb?.id,
          name: userDb?.name,
          email: userDb?.email,
          birthPlace: userDb?.birthPlace,
          birthDate: userDb?.birthDate,
        },
      };
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  debug: process.env.NODE_ENV === "development",
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      // @ts-ignore
      async authorize(credentials) {
        if (!credentials?.password) {
          return null;
        }

        const user = await db.user.findUnique({
          where: {
            email: credentials.email,
            password: hashPassword(credentials.password),
          },
          select: {
            id: true,
            name: true,
            email: true,
            birthPlace: true,
            birthDate: true,
          },
        });

        if (!user) {
          return null;
        }

        return user;

        // return {
        //   name: credentials?.email,
        //   email: credentials?.email,
        // };
      },
    }),
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
