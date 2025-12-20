"use client";

import { motion } from "framer-motion";

interface BlurRevealProps {
    children: string; // We expect text content to split
    className?: string; // For styling the container (e.g. text-4xl font-bold)
    delay?: number; // Base delay
    duration?: number; // Animation duration per word
    stagger?: number; // Stagger delay between words
    as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div"; // Polymorphic tag
}

export const BlurReveal = ({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    stagger = 0.05,
    as: Component = "div"
}: BlurRevealProps) => {
    const words = children.split(" ");

    // We just wrap the polymorphic component
    // Note: Framer Motion can animate HTML elements directly if passed as 'component' prop to motion, 
    // but easier to just wrap internal spans.

    return (
        <Component className={`${className} inline-block`}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{
                        duration: duration,
                        delay: delay + (i * stagger),
                        ease: "easeOut"
                    }}
                    className="inline-block mr-[0.25em] whitespace-nowrap"
                >
                    {word}
                </motion.span>
            ))}
        </Component>
    );
};
