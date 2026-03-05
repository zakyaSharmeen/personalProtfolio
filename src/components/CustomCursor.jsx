import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="custom-cursor hidden md:block"
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{
          translateX: useSpring(mouseX, { damping: 40, stiffness: 150 }),
          translateY: useSpring(mouseY, { damping: 40, stiffness: 150 }),
          left: -4,
          top: -4,
        }}
      />
    </>
  );
};

export default CustomCursor;
