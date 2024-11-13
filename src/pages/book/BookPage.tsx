import {
  Box,
  SimpleGrid,
  Text,
  Container,
  Heading,
  Progress,
  Card,
  CardBody,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Link,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import HomeIcon from "../../components/icons/HomeIcon";
import InfoIcon from "../../components/icons/InfoIcon";
import { MARINE_LIFE } from "./data/marin-life";
import { useNavigate } from "react-router-dom";

const BookPage = () => {
  const totalCards = MARINE_LIFE.length; // 전체 물고기 종류 수
  const discoveredCards = 7; // 발견한 물고기 종류 수
  const { isOpen, onOpen, onClose } = useDisclosure(); // 모달 열고 닫기 상태 관리
  const navigate = useNavigate();

  // 상태에 따른 색상 매핑 함수
  const getStatusColor = (status: string) => {
    switch (status) {
      case "LC":
        return "green.500"; // 초록색
      case "VU":
        return "yellow.500"; // 노란색
      case "EN":
        return "orange.500"; // 주황색
      case "CR":
        return "red.500"; // 빨간색
      default:
        return "gray.500"; // 기본 색상 (LC, VU, EN, CR 외의 경우)
    }
  };

  // 반응형으로 모달의 너비 조정 (모바일에서는 90vw, 데스크탑에서는 기본 크기)
  const modalSize = useBreakpointValue({ base: "90vw", md: "md" });

  return (
    <Box h="100vh" display="flex" flexDirection="column">
      <Container maxW="container.xl" py={4} flex="none">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
          mb={4}
        >
          {/* "보호종 더 알아보기" 링크 */}
          <Link
            href="https://www.nie.re.kr/nie/pgm/edSearch/main.do?menuNo=200133"
            isExternal
            color="blue.500"
            fontWeight="bold"
            fontSize="sm"
            position="absolute"
            left="0" // 왼쪽에 배치
            _hover={{ textDecoration: "underline" }}
          >
            보호종 더 알아보기
          </Link>

          {/* "도감" 제목 */}
          <Heading size="lg" textAlign="center">
            도감
          </Heading>

          {/* 홈 버튼 */}
          <IconButton
            icon={<HomeIcon boxSize="24px" />}
            aria-label="홈으로 이동"
            onClick={() => navigate("/")}
            variant="ghost"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _focus={{ boxShadow: "none" }}
            position="absolute"
            right="0"
          />
        </Box>

        <Box mb={5} display="flex" justifyContent="center" alignItems="center">
          <Text mr={-1} textAlign="center">
            물고기를 발견하고 도감을 채워봐요!
          </Text>
          <IconButton
            icon={<InfoIcon boxSize="35px" />}
            aria-label="멸종 등급 설명 보기"
            onClick={onOpen}
            variant="ghost"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _focus={{ boxShadow: "none" }}
          />
        </Box>

        <Box position="relative" mb={4}>
          <Progress
            value={(discoveredCards / totalCards) * 100}
            size="lg"
            colorScheme="blue"
            borderRadius="full"
          />
          <Text
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            fontSize="sm"
          >
            {discoveredCards}/{totalCards}
          </Text>
        </Box>
      </Container>

      {/* 멸종 등급 설명 모달 */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW={modalSize}>
          <ModalHeader>멸종 등급 설명</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" color="red.500" mb={2}>
              CR (위급)
            </Text>
            <Text mb={4}>
              멸종 위험이 가장 높은 상태로, 즉각적인 보존 조치가 없으면 멸종될
              가능성이 큽니다.
            </Text>
            <Text fontWeight="bold" color="orange.500" mb={2}>
              EN (위기)
            </Text>
            <Text mb={4}>
              멸종 위험이 높아, 보존 조치가 필요하지만 위급보다는 다소 낮은
              수준입니다.
            </Text>
            <Text fontWeight="bold" color="yellow.500" mb={2}>
              VU (취약)
            </Text>
            <Text mb={4}>
              멸종 위험이 비교적 높은 상태로, 특정 환경 변화나 인간의 활동으로
              인해 멸종될 가능성이 있는 상태입니다.
            </Text>
            <Text fontWeight="bold" color="green.500" mb={2}>
              LC (관심 필요 없음)
            </Text>
            <Text>
              멸종 위험이 거의 없는 상태로, 개체 수가 충분해 안정적인
              상태입니다.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box
        flex="1"
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}
      >
        <Container maxW="container.xl" pb={8}>
          <SimpleGrid
            columns={{ base: 3, md: 4, lg: 4 }}
            spacing={3}
            mx="auto"
            mt={4} // 상단 여백 추가
          >
            {MARINE_LIFE.map((fish, index) => (
              <Card
                key={index}
                bg="gray.100"
                maxW="160px"
                w="100%"
                position="relative"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                transition="all 0.2s"
              >
                {/* 멸종 등급 책갈피 모양 */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  bg={getStatusColor(fish.status)} // 상태에 따라 색상 설정
                  color="white"
                  px={2}
                  py={1}
                  fontSize="xs"
                  fontWeight="bold"
                  borderBottomRightRadius="md"
                  zIndex="1"
                  transform="translate(-10%, -10%) rotate(-25deg)"
                >
                  {fish.status}
                </Box>

                <CardBody p={2}>
                  <Box
                    h="100px"
                    bg="gray.200"
                    mb={2}
                    borderRadius="md"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text color="gray.500" fontSize="xs" textAlign="center">
                      등록되지 않은 <br /> 물고기에요
                    </Text>
                  </Box>
                  <Text
                    textAlign="center"
                    fontWeight="medium"
                    fontSize="sm"
                    noOfLines={1}
                  >
                    {fish.name}
                  </Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default BookPage;
