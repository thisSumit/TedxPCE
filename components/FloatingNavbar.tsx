"use client";
import React, { JSX, useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
    px,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const FloatingNav = () => {
    const { scrollYProgress } = useScroll();

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
                    "flex  fixed top-10 inset-x-0 mx-auto w-[90%] z-[5000]  items-center justify-between px-4 space-x-4",
                )}
            >
                <div className="flex items-center w-full justify-around gap-4">
                <Link className="text-lg text-black dark:text-white" href="/">Home</Link>
                <Link className="text-lg text-black dark:text-white" href="/">About</Link>
                <Link className="text-lg text-black dark:text-white" href="/">Speaker</Link>
                </div>

                <Image
                    src="/tedxpce-w.svg"
                    width={200}
                    height={200}
                    alt="Picture of the author"
                />

                <div className="flex items-center w-full justify-around gap-4">
                <Link className="text-lg text-black dark:text-white" href="/">Partner</Link>
                <Link className="text-lg text-black dark:text-white" href="/">Contact</Link>
                <button className="border text-nowrap relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-8 py-4 rounded-full">
                    Buy Ticket
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-red-500 to-transparent  h-px" />
                </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default FloatingNav;