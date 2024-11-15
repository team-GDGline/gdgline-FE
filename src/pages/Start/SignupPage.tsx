import React, { useState } from "react";
import styled from "@emotion/styled";
import { Flex, Text, keyframes, Box, useToast } from "@chakra-ui/react";
import axios from "axios";
import background_sea from "../../assets/background_sea.svg";
import background_sea_phone from "../../assets/background_sea_phone.svg";
import backgroundFish1 from "../../assets/background_fish1.svg";
import backgroundFish2 from "../../assets/background_fish2.svg";
import WhiteInput from "../../components/WhiteInput.tsx";
import PasswordInput from "../../components/PasswordInput.tsx";
import NextButton from "../../components/NextButton.tsx";
import CheckDuplicateEmail from "../../components/CheckDuplicateEmail.tsx";
import { useNavigate } from "react-router-dom";
import start_img from "../../assets/start_img.svg";
import { API_BASE_URL } from "../../api/constant.ts";

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickname] = useState("");
  const [animate, setAnimate] = useState(false);

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/v1/user/signup`, {
        email,
        nickName,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        }});
      
      if (response.status === 200) {
        toast({
          title: "회원가입이 완료되었습니다",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setAnimate(true);
        setTimeout(() => {
          navigate("/main");
        }, 1300);
      }
    } catch (error) {
      toast({
        title: "회원가입에 실패했습니다",
        description: error.response?.data?.message || "다시 시도해주세요",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return (
    <Wrapper>
      <Box
        as="img"
        src={backgroundFish1}
        position="absolute"
        top="20%"
        left="0"
        width="400px"
        animation={`${swimAnimation} 10s linear infinite`}
        opacity={0.9}
      />
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
      <Flex zIndex="10" position="relative" mt="80px" justifyContent="center" alignItems="center" flexDirection="column">
        <Text fontSize="4xl" color="#152972">물</Text>
        <Text fontSize="4xl" color="#152972">멍</Text>
      </Flex>
      
      <Flex width="100%" flexDirection="column" alignItems="center">
        <CheckDuplicateEmail value={email} text="이메일" handleChange={handleChangeEmail} placeholder="이메일을 입력해주세요." />
        <PasswordInput value={password} text="비밀번호" handleChange={handleChangePw} placeholder="비밀번호를 입력해주세요." />
        <WhiteInput value={nickName} text="닉네임" handleChange={handleChangeName} placeholder="닉네임을 입력해주세요." />
      </Flex>
      
      <NextButton onClick={handleSignup}>가입하기</NextButton>

      {/* 화면 밖에서 시작해 오른쪽으로 지나가는 애니메이션 */}
      <AnimatedFish src={start_img} alt="fish" className={animate ? "animate-in" : ""} />
    </Wrapper>
  );
};

export default SignupPage;

const floatAnimation = keyframes`
  0%, 100% { transform: translateX(-300%); }
`;
// 천천히 나타나고 빠르게 사라지게 하는 애니메이션 정의
const slideInOutAnimation = keyframes`
  0% { transform: translateX(-300%); } 
  50% { transform: translateX(20%); }   
  100% { transform: translateX(300%); } 
`;

const AnimatedFish = styled.img`
  width: 500px;
  position: absolute;
  top: 40%;
  z-index: 5;
  animation: ${floatAnimation} 3s ease-in-out infinite; /* 둥둥 떠있는 애니메이션 */
  &.animate-in {
    animation: ${slideInOutAnimation} 3s ease-in-out forwards;  
  }
`;

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
