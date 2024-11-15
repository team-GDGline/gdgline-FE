import React, {useState} from "react";
import styled from "@emotion/styled";
import { Flex, Text, keyframes, Box} from "@chakra-ui/react";
import background_sea from "../../assets/background_sea.svg";
import background_sea_phone from "../../assets/background_sea_phone.svg";
import backgroundFish1 from "../../assets/background_fish1.svg";
import backgroundFish2 from "../../assets/background_fish2.svg";
import WhiteInput from "../../components/WhiteInput.tsx";
import PasswordInput from "../../components/PasswordInput.tsx";
import NextButton from "../../components/NextButton.tsx";
import { Link, useNavigate } from "react-router-dom";
import start_img from "../../assets/start_img.svg";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // 이메일 상태
  const [password, setPassword] = useState("");
  const [animate, setAnimate] = useState(false); // 애니메이션 상태

  const handleLogin = () => {
    setAnimate(true); // 애니메이션 시작
    setTimeout(() => {
      navigate("/main"); // 페이지 이동
    }, 1300); // 애니메이션이 끝난 후 페이지 이동
  };
  // 이메일 입력값을 업데이트하는 함수
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
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
  <Flex zIndex="10" position="relative" mt='80px' justifyContent='center' alignItems='center' flexDirection='column' >
      <Text fontSize='4xl' color="#152972" >물</Text>
      <Text fontSize='4xl' color="#152972" >멍</Text>
  </Flex>
  <Flex width="100%" display="flex" flexDirection='column' alignItems="center" >
    <WhiteInput value={email} text="이메일" handleChange={handleChangeEmail} placeholder="이메일을 입력해주세요."/>
    <PasswordInput value={password} text="비밀번호" handleChange={handleChangePw} placeholder="비밀번호를 입력해주세요."/>
    </Flex>
      <NextButton onClick={handleLogin}>로그인하기</NextButton>
      {/* 나중에는 Login화면으로 가야 함 일단은 MainPage로 가도록 설정 */}
      <Flex display="flex" gap="5px" position="absolute" bottom="60px" fontWeight="200">
      <Text fontSize='1xl' color="white">아직 회원이 아니신가요?</Text>
      <GoToSignup to="/signup">회원가입</GoToSignup>
      </Flex>
        {/* 화면 밖에서 시작해 오른쪽으로 지나가는 애니메이션 */}
        <AnimatedFish src={start_img} alt="fish" className={animate ? "animate-in" : ""} />
      </Wrapper>
  );
};

export default LoginPage;

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

const GoToSignup = styled(Link)`
    color: white;
    text-decoration: underline;
`;
const swimAnimation = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;



