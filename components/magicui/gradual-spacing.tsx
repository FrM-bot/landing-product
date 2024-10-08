"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";

import { cn, formatGradualSpacingText } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  return (
    <div className="flex space-x-1 relative flex-wrap">
      <AnimatePresence>
        {formatGradualSpacingText(text).split(" ").map((char, i) => (
          <motion.span
            key={i.toString()}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("drop-shadow-sm z-0 tracking-wide", className)}
          >
            {char === "|" ? <i>&nbsp;</i> : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
