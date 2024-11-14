import React, {useState} from "react";
import styled from "@emotion/styled";
import { Flex, Text, keyframes, Box} from "@chakra-ui/react";
import background_sea from "../../assets/background_sea.svg";
import background_sea_phone from "../../assets/background_sea_phone.svg";
import backgroundFish1 from "../../assets/background_fish1.svg";
import backgroundFish2 from "../../assets/background_fish2.svg";
import start_img from "../../assets/start_img.svg";
import NextButton from "../../components/NextButton.tsx";
import { useNavigate } from "react-router-dom";

const StartPage: React.FC = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false); // 애니메이션 상태

  const handleStartClick = () => {
    setAnimate(true); // 애니메이션 시작
    setTimeout(() => {
      navigate("/"); // 페이지 이동
    }, 1200); // 애니메이션이 끝난 후 페이지 이동
  };

  
  return (
    <Wrapper id="waveEffect">
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
  <AnimatedFish src={start_img} alt="fish" className={animate ? "animate-out" : ""} />
      <NextButton onClick={handleStartClick}>시작하기</NextButton>
      {/* 나중에는 Login화면으로 가야 함 일단은 MainPage로 가도록 설정 */}
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
    overflow: hidden;

`;


const swimAnimation = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

// // 물결 애니메이션 정의
// const waveAnimation = keyframes`
//   0% { transform: scale(1) translateY(0); }
//   50% { transform: scale(1.1) translateY(-5px); }
//   100% { transform: scale(1) translateY(0); }
// `;

// start_img 둥둥 떠있는 애니메이션과 클릭 후 반동 효과 애니메이션
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const bounceOutAnimation = keyframes`
  0% { transform: translateX(0) translateY(0); }
  30% { transform: translateX(-20px) translateY(-5px); } /* 왼쪽으로 반동 */
  100% { transform: translateX(200%) translateY(20px); } /* 오른쪽으로 빠르게 이동하며 위아래 흔들림 */
`;
// 위아래로 움직이는 애니메이션 정의
//next로 넘어갈 때 회전 및 이동
const AnimatedFish = styled.img`
  width: 500px;
  position: relative;
  z-index: 5;
  animation: ${floatAnimation} 3s ease-in-out infinite; /* 둥둥 떠있는 애니메이션 */

  &.animate-out {
    animation: ${bounceOutAnimation} 1.3s ease-in-out forwards; /* 클릭 후 반동 애니메이션 */
  }
  
`;


