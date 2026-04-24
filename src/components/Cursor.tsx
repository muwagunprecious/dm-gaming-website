"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 15, stiffness: 800, mass: 0.2 };
  const sx = useSpring(cursorX, springConfig);
  const sy = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Outer Targeting Ring */}
      <motion.div
        style={{
          left: sx,
          top: sy,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          rotate: isHovering ? 180 : 0,
        }}
        className="absolute border border-primary/50 rounded-full"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-2 bg-primary"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-2 bg-primary"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-px bg-primary"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-px bg-primary"></div>
      </motion.div>

      {/* Central Laser Dot */}
      <motion.div
        style={{
          left: sx,
          top: sy,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "var(--accent)" : "var(--primary)",
        }}
        className="absolute w-1.5 h-1.5 rounded-full shadow-[0_0_10px_var(--glow-color)] transition-colors duration-300"
      />

      {/* Target Data Readout (only when hovering) */}
      {isHovering && (
        <motion.div
          style={{
            left: sx,
            top: sy,
          }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 50 }}
          className="absolute pointer-events-none text-[8px] font-bold text-primary flex flex-col space-y-0.5"
        >
          <div className="flex items-center space-x-2">
            <span className="opacity-50">TRK:</span>
            <span>LOCKED</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="opacity-50">TYP:</span>
            <span>OBJ_INTERACT</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
