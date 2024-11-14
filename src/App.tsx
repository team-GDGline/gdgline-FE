// App.tsx
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";
import { BubbleContainer } from "./components/Bubble/BubbleContainer";
import { Bubble } from "./components/Bubble/bubble";
import { Wrapper } from "./components/Wrapper";
import { Routes } from "./routes/Routes";
import { useBubbles } from "./components/Bubble/useBubbles";

const App = () => {
  const bubbles = useBubbles();

  return (
    <ChakraProvider theme={theme}>
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

export default App;

import styled from "@emotion/styled";

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #006994 0%, #1e4d6b 50%, #0a2a43 100%);
  overflow: hidden;
`;
