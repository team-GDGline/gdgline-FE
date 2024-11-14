// components/Wrapper.tsx
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: white;
  backdrop-filter: blur(5px);
  z-index: 1;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;
