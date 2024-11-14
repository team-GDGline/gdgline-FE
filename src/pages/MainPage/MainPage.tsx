import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import {
  Flex, Text, keyframes, Box,
  Menu, MenuButton, MenuList, MenuItem, Image,
  Icon, Button
} from "@chakra-ui/react";
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon, IconButton } from "@chakra-ui/icons";
import { LogOutIcon, Trash2Icon, MenuIcon, Camera, CameraIcon } from "lucide-react";
import start_img from "../../assets/start_img.svg";
import fishIcon from "../../assets/fishIcon.svg";
import Aquarium from "./components/Aquarium";
import bottomLayout_blue from "../../assets/bottomLayout_blue.png";


const MainPage: React.FC = () => {
  const [nickname, setNickname] = useState('고희연')
  return (
    <Wrapper>
      <Flex width="100%" justifyContent="flex-end" p={1}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<MenuIcon size="28" />}
            variant='unstyled'
            size="lg"
          />
          <MenuList>
            {/* 첫 번째 MenuItem은 텍스트처럼 표시 */}
            <MenuItem icon={<Image src={fishIcon} boxSize="1.5em" />} isDisabled _hover={{ bg: "transparent" }} _disabled={{ opacity: 1, cursor: "default" }}>
              {nickname} 님
            </MenuItem>
            <MenuItem icon={<LogOutIcon size="20" />} >
              로그아웃
            </MenuItem>
            <MenuItem icon={<Trash2Icon size="20" />}>
              회원 탈퇴
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Flex mb='10px' justifyContent='center' alignItems='center' flexDirection='column' >
        <Text fontSize='3xl' color="#152972" >물</Text>
        <Text fontSize='3xl' color="#152972" >멍</Text>
      </Flex>
      <AnimatedFish src={start_img} alt="fish" />
      <Text mt="20px" fontSize='1xl' color="#666666" >물고기를 모아 나만의 아쿠아리움을 완성하세요</Text>
      <Aquarium></Aquarium>
      <BottomLayout>
      <Button mt='10px' mb="10px" borderRadius="50%"  bg='white' border="1px solid black" color='black' w={16} h={16} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} >
      <CameraIcon size="40"/>
      </Button>
    <GoBook to="/book">
      도감
    </GoBook>
    </BottomLayout>

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
// 처음 렌더링 시에만 왼쪽에서 오른쪽으로 슬라이드 애니메이션 정의
const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// 위아래로 움직이는 애니메이션 정의
const AnimatedFish = styled.img`
  width: 200px;
  animation: ${slideIn} 1.5s ease-out forwards; /* 1.5초 동안 슬라이드 인 애니메이션 */

  /* 밑에 코드는 둥실둥실 */
  /* animation: float 3s ease-in-out infinite;

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
  } */
`;

const BottomLayout = styled.div`
  display: fex;

`;

const GoBook =  styled(Link)`
  background-color: #FFFFFF;
  color: #05518F;
  width: 80px;
  height: 40px;
  font-size: 24px;
  border-radius: 10px;
  position: absolute;
  margin-top: 20px;
  text-align: center;
  right: 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #C5EFFF;
  }

  &:active {
    background-color: #55CFFF;
    transform: scale(0.95); /* 눌렀을 때 살짝 축소 효과 */
    box-shadow: 0 0 20px rgba(85, 207, 255, 0.6); /* 번지는 효과 */
  }
`;