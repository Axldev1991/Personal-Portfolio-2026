"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useSpring(0, { damping: 20, stiffness: 250, restDelta: 0.001 });
    const mouseY = useSpring(0, { damping: 20, stiffness: 250, restDelta: 0.001 });

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        window.addEventListener("mousemove", moveMouse);
        return () => window.removeEventListener("mousemove", moveMouse);
    }, [mouseX, mouseY, isVisible]);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-accent rounded-full pointer-events-none z-[10000] mix-blend-difference hidden md:block"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-accent rounded-full pointer-events-none z-[10000] hidden md:block"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
            />
        </>
    );
}
