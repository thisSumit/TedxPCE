"use client";
import React, { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FiHome, FiMail, FiMenu, FiMic, FiUser, FiUsers } from "react-icons/fi";

export const FloatingNav = () => {
    const { scrollYProgress } = useScroll();
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex bg-black/10 backdrop-blur-lg bg-blend-exclusion fixed inset-x-0 z-[5000] items-center lg:justify-evenly justify-between p-4 space-x-4",
                )}
            >
                <div className="hidden lg:flex items-center mix-blend-difference w-full justify-center gap-8">
                    <Link className="text-lg text-black dark:text-white" href="/">Home</Link>
                    <Link className="text-lg text-black dark:text-white" href="/">About</Link>
                    <Link className="text-lg text-black dark:text-white" href="/">Speaker</Link>
                </div>

                <Image
                    className="justify-center mt-4 items-center cursor-pointer mx-5 px-5"
                    src="/tedxpce-w.svg"
                    width={200}
                    height={200}
                    alt="TEDxPCE"
                />

                <button className="lg:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                    <FiMenu />
                </button>

                <div className="flex items-center w-full justify-center gap-8">
                    <Link className="hidden lg:flex text-lg text-black dark:text-white" href="/">Partner</Link>
                    <Link className="hidden lg:flex text-lg text-black dark:text-white" href="/">Contact</Link>
                    <button className="border hover:bg-redx duration-500 hover:backdrop-blur-lg text-nowrap relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-8 py-4 rounded-full">
                        Buy Ticket
                        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-red-500 to-transparent  h-px" />
                    </button>
                </div>
            </motion.div>

            {menuOpen && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-lg p-6 z-[6000] flex flex-col items-stretch space-y-6 text-white"
        >
          <button className="text-2xl self-end" onClick={() => setMenuOpen(false)}>✖</button>
          <Link className="text-lg flex items-center gap-2" href="/"><FiHome /> Home</Link>
          <Link className="text-lg flex items-center gap-2" href="/about"><FiUser /> About</Link>
          <Link className="text-lg flex items-center gap-2" href="/speaker"><FiMic /> Speaker</Link>
          <Link className="text-lg flex items-center gap-2" href="/partner"><FiUsers /> Partner</Link>
          <Link className="text-lg flex items-center gap-2" href="/contact"><FiMail /> Contact</Link>
          <button className="border hover:bg-redx duration-500 hover:backdrop-blur-lg text-nowrap relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-8 py-4 rounded-full">
                        Buy Ticket
                        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-red-500 to-transparent h-px" />
                    </button>
        </motion.div>
      )}
        </AnimatePresence>
    );
}

export default FloatingNav;