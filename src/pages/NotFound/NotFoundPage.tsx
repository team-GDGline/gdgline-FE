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

  const nextPage = () => {
    // 사진 촬영 페이지로 이동하는 함수 (예: /capture 페이지로 이동)
    navigate("/capture");
  };

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
          <Heading
            size="xl"
            textAlign="center"
            fontFamily="'Yeon Sung', sans-serif"
          >
            분석 결과
          </Heading>
          <IconButton
            icon={<HomeIcon boxSize="30px" />}
            aria-label="홈으로 이동"
            onClick={() => navigate("/")}
            variant="ghost"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _focus={{ boxShadow: "none" }}
            position="absolute"
            left="0"
          />
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
        <Text fontSize="2xl" mb={6} fontFamily="'Yeon Sung', sans-serif">
          분석된 물고기가 없어요 😢
        </Text>
        <Button
          onClick={nextPage}
          colorScheme="blue"
          variant="outline"
          width="80%"
          fontFamily="'Yeon Sung', sans-serif"
        >
          다시 촬영하기
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
