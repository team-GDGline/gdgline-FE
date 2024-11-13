import React from "react";
import styled from "@emotion/styled";
import { Flex, Text, keyframes, Box} from "@chakra-ui/react";
import background_sea from "../../assets/background_sea.svg";
import background_sea_phone from "../../assets/background_sea_phone.svg";
import backgroundFish1 from "../../assets/background_fish1.svg";
import backgroundFish2 from "../../assets/background_fish2.svg";
import start_img from "../../assets/start_img.svg";
import NextButton from "../../components/NextButton.tsx";


const StartPage: React.FC = () => {
  return (
    <Wrapper>
            {/* backgroundFish1 */}
         <Box
        as="img"
        src={backgroundFish1}
        position="absolute"
        top="20%"
        left="0"
        width="400px"
        animation={`${swimAnimation} 10s linear infinite`}
        opacity={0.9} // 살짝 투명하게
      />
            {/* backgroundFish2 */}
           <Box
        as="img"
        src={backgroundFish2}
        position="absolute"
        top="50%"
        right="0"
        width="300px"
        animation={`${swimAnimation} 10s linear infinite reverse`}
        opacity={0.8}
      />
      {/* 물멍 텍스트 */}
  <Flex zIndex="10" position="relative" mt='90px' justifyContent='center' alignItems='center' flexDirection='column' >
      <Text fontSize='5xl' color="#152972" >물</Text>
      <Text fontSize='5xl' color="#152972" >멍</Text>
  </Flex>
      <AnimatedFish src={start_img} alt="fish" />
      <NextButton>시작하기</NextButton>
      </Wrapper>
  );
};

export default StartPage;


const Wrapper = styled.div`
 @media (min-width: 600px) {
  background-image: url(${background_sea});
  }
    background-image: url(${background_sea_phone});
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

`;


const swimAnimation = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

// 위아래로 움직이는 애니메이션 정의
const AnimatedFish = styled.img`
  width: 500px;
  animation: float 3s ease-in-out infinite;
  position: relative;
  z-index: 5;

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

