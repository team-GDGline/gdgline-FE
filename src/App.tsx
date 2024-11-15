// App.tsx
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";
import { Wrapper } from "./components/Wrapper";
import { Routes } from "./routes/Routes";
import { useLocation, useNavigate } from 'react-router-dom';

const App = () => {

 
  return (
    <ChakraProvider theme={theme}>
      <PageContainer>
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
