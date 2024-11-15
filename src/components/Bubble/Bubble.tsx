// components/Bubble/Bubble.tsx
import styled from "@emotion/styled";
import { bubbleRise } from "./bubbleRise";

export const Bubble = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.2)
  );
  animation: ${bubbleRise} linear forwards;
  pointer-events: none;
`;
