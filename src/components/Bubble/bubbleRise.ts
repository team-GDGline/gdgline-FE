// animations/bubbleRise.ts
import { keyframes } from "@emotion/react";

export const bubbleRise = keyframes`
  0% {
    transform: translateY(0) translateX(0) scale(0.8);
    opacity: 0.6;
  }
  100% {
    transform: translateY(-120vh) translateX(${
      Math.random() * 50 - 25
    }px) scale(1.2);
    opacity: 0;
  }
`;
