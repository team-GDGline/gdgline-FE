// hooks/useBubbles.ts
import { useEffect, useState } from "react";

export type BubbleType = {
  id: number;
  left: number;
  bottom: number;
  size: number;
  duration: number;
  delay: number;
};

export const useBubbles = () => {
  const [bubbles, setBubbles] = useState<BubbleType[]>([]);

  useEffect(() => {
    const initialBubbles = Array.from({ length: 15 }, () => ({
      id: Math.random(),
      left: Math.random() * 100,
      bottom: -(Math.random() * 100),
      size: Math.random() * 15 + 10,
      duration: Math.random() * 5 + 10,
      delay: Math.random() * -15,
    }));
    setBubbles(initialBubbles);

    const interval = setInterval(() => {
      const newBubble = {
        id: Math.random(),
        left: Math.random() * 100,
        bottom: -10,
        size: Math.random() * 15 + 10,
        duration: Math.random() * 5 + 10,
        delay: 0,
      };
      setBubbles((prev) => [...prev.slice(-14), newBubble]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return bubbles;
};
