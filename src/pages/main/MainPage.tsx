import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Flex, Text, keyframes, Box,
  Menu, MenuButton, MenuList, MenuItem, Image,
  Icon
} from "@chakra-ui/react";
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon, IconButton } from "@chakra-ui/icons";
import { LogOutIcon, Trash2Icon, MenuIcon } from "lucide-react";
import start_img from "../../assets/start_img.svg";
import fishIcon from "../../assets/fishIcon.svg";
import Aquarium from "./components/Aquarium";
import { px } from "framer-motion";


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

