import {
  Box,
  Text,
  Heading,
  Button,
  IconButton,
  Container,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../../components/icons/HomeIcon";
import sadImage from "./assets/sad.svg"; // sad.svg 파일을 import

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      h="100vh"
      display="flex"
      flexDirection="column"
      background="#E9F9FF"
      alignItems="center"
    >
      <Container maxW="container.xl" py={4} flex="none" background="#E9F9FF">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
          mb={4}
        >
          <Heading size="xl" textAlign="center">
            분석 결과
          </Heading>

          {/* 홈 아이콘 버튼 */}
          <IconButton
            icon={<HomeIcon boxSize="30px" />}
            aria-label="홈으로 이동"
            onClick={() => navigate("/main")}
            variant="ghost"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _focus={{ boxShadow: "none" }}
            position="absolute"
            left="0"
          />

          {/* 오른쪽 끝에 위치한 "도감" 텍스트 */}
          <Text
            position="absolute"
            right="0"
            cursor="pointer"
            fontSize="2xl"
            color="black"
            onClick={() => navigate("/book")}
            _hover={{ textDecoration: "underline" }}
          >
            도감
          </Text>
        </Box>
      </Container>

      {/* 이미지 */}
      <Image src={sadImage} alt="Sad face" width="100%" maxW="600px" mb={4} />

      {/* 메시지 텍스트와 버튼 */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <Text fontSize="2xl" mb={6}>
          분석된 물고기가 없어요 😢
        </Text>
        <Button
          onClick={() => navigate("/camera")}
          colorScheme="blue"
          variant="outline"
          background={"white"}
          width="100%"
          boxShadow={"md"}
        >
          다시 촬영하기
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
