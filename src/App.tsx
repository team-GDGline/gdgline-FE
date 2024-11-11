import { Routes } from "./routes/Routes";
import { ChakraProvider } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useEffect, useState } from "react";

// 애니메이션 정의
const bubbleRise = keyframes`
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

// Bubble 타입 정의
type BubbleType = {
  id: number;
  left: number;
  bottom: number;
  size: number;
  duration: number;
  delay: number;
};

const App = () => {
  const [bubbles, setBubbles] = useState<BubbleType[]>([]);

  useEffect(() => {
    // 초기 물방울 생성
    const initialBubbles = Array.from({ length: 15 }, () => ({
      id: Math.random(),
      left: Math.random() * 100,
      bottom: -(Math.random() * 100),
      size: Math.random() * 15 + 10,
      duration: Math.random() * 5 + 10,
      delay: Math.random() * -15,
    }));
    setBubbles(initialBubbles);

    // 주기적으로 새로운 물방울 추가
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

  return (
    <ChakraProvider>
      <PageContainer>
        <BubbleContainer>
          {bubbles.map((bubble) => (
            <Bubble
              key={bubble.id}
              style={{
                left: `${bubble.left}%`,
                bottom: `${bubble.bottom}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                animationDuration: `${bubble.duration}s`,
                animationDelay: `${bubble.delay}s`,
              }}
            />
          ))}
        </BubbleContainer>
        <Wrapper>
          <Routes />
        </Wrapper>
      </PageContainer>
    </ChakraProvider>
  );
};

// 스타일드 컴포넌트
const PageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #006994 0%, #1e4d6b 50%, #0a2a43 100%);
  overflow: hidden;
`;

const BubbleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Bubble = styled.div`
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

const Wrapper = styled.div`
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

export default App;

// 한 페이지에 해당하는 api, hooks, components, types .. 들은 한 폴더에 모아두기
// index.tsx 사용금지. 명확하게 이름 정하기
