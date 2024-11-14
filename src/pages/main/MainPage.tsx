import React from "react";
import styled from "@emotion/styled";
import { Flex, Text, Keyframes, Box} from "@chakra-ui/react";
import background_sea from "../../assets/background_sea.svg";
import background_sea_phone from "../../assets/background_sea_phone.svg";
import aquarium from "../../assets/aquarium.svg";
import start_img from "../../assets/start_img.svg";
import NextButton from "../../components/NextButton";


const MainPage: React.FC = () => {
  return (
    <Wrapper>
  <Flex mt='40px' justifyContent='center' alignItems='center' flexDirection='column' >
      <Text fontSize='3xl' color="#152972" >물</Text>
      <Text fontSize='3xl' color="#152972" >멍</Text>
  </Flex>
      <AnimatedFish src={start_img} alt="fish" />
      <Text mt="10px" fontSize='1xl' color="#666666" >물고기를 모아 나만의 아쿠아리움을 완성하세요</Text>
      <Aquarium></Aquarium>
      </Wrapper>
  );
};

export default MainPage;


const Wrapper = styled.div`
    background-color: #E9F9FF;
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

// 위아래로 움직이는 애니메이션 정의
const AnimatedFish = styled.img`
  width: 200px;
  animation: float 3s ease-in-out infinite;

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

const Aquarium = styled.div`
  width: 100%;
  height: 40%;
  background-image: url(${aquarium});
  background-size: contain;
`;
