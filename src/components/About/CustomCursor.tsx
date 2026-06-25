import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'text' | 'grab'>('default');
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const dotXSpring = useSpring(dotX, { damping: 50, stiffness: 500 });
  const dotYSpring = useSpring(dotY, { damping: 50, stiffness: 500 });

  useEffect(() => {
    // Detectar si es dispositivo táctil
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      
      if (!isVisible) setIsVisible(true);
      
      // Detectar tipo de elemento bajo el cursor
      const target = e.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      const isClickable = 
        tagName === 'a' || 
        tagName === 'button' || 
        target.closest('a, button, [role="button"]') ||
        target.closest('[data-cursor]');
      
      if (target.closest('[data-cursor]')) {
        const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
        setCursorType((cursorAttr as any) || 'pointer');
      } else if (isClickable) {
        setCursorType('pointer');
      } else if (tagName === 'input' || tagName === 'textarea') {
        setCursorType('text');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, dotX, dotY, isVisible]);

  // No renderizar en touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  const cursorSizes = {
    default: 20,
    pointer: 50,
    text: 4,
    grab: 40,
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: cursorSizes[cursorType],
          height: cursorType === 'text' ? 30 : cursorSizes[cursorType],
          borderRadius: cursorType === 'text' ? 0 : '50%',
          backgroundColor: cursorType === 'pointer' 
            ? 'rgba(74, 222, 128, 0.1)' 
            : cursorType === 'text'
            ? '#433bff'
            : 'transparent',
          borderColor: cursorType === 'pointer' ? '#4ade80' : '#433bff',
          borderWidth: 2,
          borderStyle: 'solid',
        }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
      />
      
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent-bright rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: dotXSpring,
          y: dotYSpring,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}