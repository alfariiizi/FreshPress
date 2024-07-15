import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { News_Cycle } from "next/font/google";
import { Toaster } from "react-hot-toast";

const newsCycle = News_Cycle({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Star Library",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${newsCycle.variable} w-full`}
    >
      <body className="w-full">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            className:
              "border-2 z-[100000] font-semibold border-primary min-h-16",
            style: {
              padding: "8px 20px",
            },
            duration: 3000,
            error: {
              className:
                "border-2 border-destructive z-[100000] font-semibold min-h-16",
            },
          }}
        />
      </body>
    </html>
  );
}
