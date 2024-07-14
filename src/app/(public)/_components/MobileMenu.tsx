"use client";

import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useClickAway } from "@uidotdev/usehooks";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { categoryList } from "./Categories";

export default function MobileMenu() {
  const [isOpen, setOpen] = useState(false);
  const ref = useClickAway(() => {
    setOpen(false);
  });

  return (
    <aside className="flex md:hidden">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // @ts-ignore
            ref={ref}
            initial={{
              x: "100dvw",
            }}
            animate={{
              x: "40dvw",
            }}
            exit={{
              x: "100dvw",
            }}
            transition={{
              type: "tween",
            }}
            className="absolute left-0 top-0 flex h-dvh w-[57dvw] flex-col gap-8 bg-zinc-900 px-2 py-6 text-white"
          >
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <div className="flex w-full justify-center gap-6">
              <Link
                href="/login"
                className={buttonVariants({ variant: "default" })}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className={buttonVariants({
                  variant: "outline",
                  className: "text-black",
                })}
              >
                Register
              </Link>
            </div>
            <ul className="flex w-full flex-col px-4">
              {categoryList.map((category) => (
                <li key={category.name} className="w-full py-3">
                  <Link
                    href={`/category${category.url}`}
                    className="h-full w-full text-lg"
                    onClick={() => setOpen(false)}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
