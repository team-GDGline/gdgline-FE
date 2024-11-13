import React from "react";
import styled from "@emotion/styled";
import background_sea from "../../assets/background_sea.png";
import global_fonts from "../../styles/global_fonts.ts";
import background_start from "../../assets/background_start.png";
import background_start2 from "../../assets/background_start2.png";
import fish from "../../assets/fish.png";

const StartPage: React.FC = () => {
  return (
    <Wrapper>
      <h1>물멍</h1>
      <AnimatedFish src={fish} alt="fish" />
      <p>Welcome to the main page!</p>
      </Wrapper>
  );
};

export default StartPage;


const Wrapper = styled.div`
    background-image: url(${background_start2});
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;

`;

// 위아래로 움직이는 애니메이션 정의
const AnimatedFish = styled.img`
  width: 600px;
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
