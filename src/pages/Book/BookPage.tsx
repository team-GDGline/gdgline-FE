import { useState } from "react";
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
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  useDisclosure,
  useBreakpointValue,
  keyframes,
  VStack,
  Flex,
} from "@chakra-ui/react";
import HomeIcon from "../../components/icons/HomeIcon";
import InfoIcon from "./assets/InfoIcon";
import SearchIcon from "./assets/SearchIcon";
import { MARINE_LIFE } from "./data/marin-life";
import { MAIN_LIFE } from "../../components/data/main-life";
import { useNavigate } from "react-router-dom";

interface MarineLife {
  name: string;
  status: string;
  description: string;
  image: string;
}

const bounceAnimation = keyframes`
  0%, 10%, 20%, 100% { opacity: 1; }
  5%, 15% { opacity: 0; }
`;

const BookPage = () => {
  const totalCards = MARINE_LIFE.length;
  const discoveredCards = 14;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMarineLife, setSelectedMarineLife] =
    useState<MarineLife | null>(null);
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "LC":
        return "green.500";
      case "VU":
        return "yellow.500";
      case "EN":
        return "orange.500";
      case "CR":
        return "red.500";
      default:
        return "gray.500";
    }
  };

  const modalSize = useBreakpointValue({ base: "90vw", md: "md" });
  const cardSize = useBreakpointValue({ base: "80vw", md: "md" });

  const handleCardClick = (fish: Partial<MarineLife>) => {
    const matchedFish = MAIN_LIFE.find(
      (mainFish) => mainFish.name === fish.name
    );
    if (matchedFish) {
      setSelectedMarineLife(matchedFish);
    }
  };

  return (
    <Box h="100vh" display="flex" flexDirection="column">
      <Container maxW="container.xl" py={4} flex="none" background="#E9F9FF">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
          mb={4}
        >
          <IconButton
            icon={<SearchIcon boxSize="120px" />}
            aria-label="보호종 더 알아보러 가기"
            onClick={() =>
              window.open(
                "https://www.nie.re.kr/nie/pgm/edSearch/main.do?menuNo=200133",
                "_blank"
              )
            }
            variant="ghost"
            color="blue.500"
            position="absolute"
            right="0"
            mt={2}
            mr={-3}
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _focus={{ boxShadow: "none" }}
            animation={`${bounceAnimation} 6s ease-in-out infinite`}
          />
          <Heading size="xl" textAlign="center">
            도감
          </Heading>
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
        </Box>

        <Box mb={3} display="flex" justifyContent="center" alignItems="center">
          <Text mr={-2} textAlign="center" fontSize={"lg"}>
            물고기를 발견하고 도감을 채워봐요!
          </Text>
          <IconButton
            icon={<InfoIcon boxSize="40px" />}
            mr={-2}
            mt={5}
            pl={4}
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
            background="white"
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
          <ModalHeader fontSize="2xl" textAlign={"center"}>
            멸종 등급 설명
          </ModalHeader>
          <ModalBody>
            <Text fontWeight="bold" color="red.500" mb={2} fontSize="xl">
              CR (위급)
            </Text>
            <Text mb={4} fontSize="lg">
              멸종 위험이 가장 높은 상태로, 즉각적인 보존 조치가 없으면 멸종될
              가능성이 큽니다.
            </Text>
            <Text fontWeight="bold" color="orange.500" mb={2} fontSize="xl">
              EN (위기)
            </Text>
            <Text mb={4} fontSize="lg">
              멸종 위험이 높아, 보존 조치가 필요하지만 위급보다는 다소 낮은
              수준입니다.
            </Text>
            <Text fontWeight="bold" color="yellow.500" mb={2} fontSize="xl">
              VU (취약)
            </Text>
            <Text mb={4} fontSize="lg">
              멸종 위험이 비교적 높은 상태로, 특정 환경 변화나 인간의 활동으로
              인해 멸종될 가능성이 있는 상태입니다.
            </Text>
            <Text fontWeight="bold" color="green.500" mb={2} fontSize="xl">
              LC (관심 필요 없음)
            </Text>
            <Text fontSize="lg">
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

      {/* 해양 생물 정보 모달 */}
      <Modal
        isOpen={!!selectedMarineLife}
        onClose={() => setSelectedMarineLife(null)}
        isCentered
        size="lg"
      >
        <ModalOverlay />
        <ModalContent padding="20px" borderRadius="10px" maxWidth={cardSize}>
          {selectedMarineLife && (
            <>
              <ModalCloseButton mt={2} />
              {/* 제목 */}
              <ModalHeader fontSize="2xl" textAlign="center" w="100%" mt={-5}>
                {selectedMarineLife.name}
              </ModalHeader>

              <VStack spacing={4} align="center" textAlign="center">
                {/* 원형 이미지 */}
                <Box
                  width="200px"
                  height="200px"
                  borderRadius="full"
                  overflow="hidden"
                  boxShadow="lg"
                  bg="gray.200"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <img
                    src={selectedMarineLife.image ?? "default-image-path"} // 이미지가 없을 경우 대체 경로 사용
                    alt={selectedMarineLife.name}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>

                {/* 상태 텍스트 */}
                <Flex alignItems="center" justifyContent="center" gap="4px">
                  <Text fontSize="xl" fontWeight="bold">
                    멸종 등급:
                  </Text>
                  <Text
                    fontWeight="bold"
                    color={getStatusColor(selectedMarineLife.status)}
                    fontSize="xl"
                  >
                    {selectedMarineLife.status}
                  </Text>
                </Flex>

                {/* 설명 */}
                <ModalBody paddingX="10px">
                  <Text fontSize="lg" textAlign={"left"}>
                    {selectedMarineLife.description ?? "설명이 없습니다."}
                  </Text>
                </ModalBody>
              </VStack>
            </>
          )}
        </ModalContent>
      </Modal>

      <Box
        flex="1"
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "5px", // 스크롤바 너비
            backgroundColor: "#E9F9FF", // 스크롤바 배경색 (Box 배경과 일치)
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888", // 스크롤바 색상
            borderRadius: "4px", // 스크롤바 모서리 둥글게
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555", // 호버 시 스크롤바 색상 변경
          },
        }}
        background="#E9F9FF"
      >
        <Container maxW="container.xl" pb={8}>
          <SimpleGrid
            columns={{ base: 3, md: 4, lg: 4 }}
            spacing={3}
            mx="auto"
            mt={4}
          >
            {MARINE_LIFE.map((fish, index) => (
              <Card
                key={index}
                bg="gray.100"
                maxW="160px"
                w="100%"
                position="relative"
                onClick={() => handleCardClick(fish)}
                _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                transition="all 0.2s"
              >
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  bg={getStatusColor(fish.status)}
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

                <CardBody p={2} background="white">
                  <Box
                    h="100px"
                    bg="gray.200"
                    mb={2}
                    borderRadius="md"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    overflow="hidden"
                  >
                    {MAIN_LIFE.some(
                      (mainFish) =>
                        mainFish.name === fish.name && mainFish.image
                    ) ? (
                      <img
                        src={
                          MAIN_LIFE.find(
                            (mainFish) => mainFish.name === fish.name
                          )?.image
                        } // MAIN_LIFE에서 이미지 경로를 가져옵니다.
                        alt={fish.name}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    ) : (
                      <Text color="gray.500" fontSize="md" textAlign="center">
                        등록되지 않은
                        <br />
                        물고기에요
                      </Text>
                    )}
                  </Box>
                  <Text textAlign="center" fontWeight="500" fontSize="md">
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
