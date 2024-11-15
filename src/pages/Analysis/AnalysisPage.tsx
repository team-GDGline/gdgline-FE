import { useState } from "react";
import {
  Box,
  Heading,
  Button,
  IconButton,
  Text,
  Flex,
  Card,
  CardBody,
  Badge,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import HomeIcon from "../../components/icons/HomeIcon";
import { ENGLISH_TO_KOREAN_MAP } from "../../components/data/english-to-korean";
import { MAIN_LIFE } from "../../components/data/main-life";

// 생물 카드의 타입 정의
interface SpeciesCard {
  name: string;
  status: string;
  extinctionStatus: string;
  image: string;
  description: string;
}

const AnalysisPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const cardSize = useBreakpointValue({ base: "80vw", md: "md" });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedSpecies, setSelectedSpecies] = useState<SpeciesCard | null>(
    null
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "CR":
        return "red.500";
      case "EN":
        return "orange.500";
      case "VU":
        return "yellow.500";
      case "LC":
        return "green.500";
      default:
        return "gray.500";
    }
  };

  const speciesCards: SpeciesCard[] = Object.entries(data.pokemonStatus).map(
    ([species, status]) => {
      const koreanName =
        ENGLISH_TO_KOREAN_MAP[species as keyof typeof ENGLISH_TO_KOREAN_MAP] ||
        species;
      const matchingLife = MAIN_LIFE.find((life) => life.name === koreanName);

      return {
        name: koreanName,
        status: status as string, // status를 string으로 단언
        extinctionStatus: matchingLife?.status || "정보 없음",
        image: matchingLife?.image || "/api/placeholder/240/180",
        description: matchingLife?.description || "정보가 없습니다.",
      };
    }
  );

  const handleCardClick = (species: SpeciesCard) => {
    setSelectedSpecies(species);
    onOpen();
  };

  return (
    <Box
      h="100vh"
      display="flex"
      flexDirection="column"
      background="#E9F9FF"
      alignItems="center"
    >
      <Box width="100%" py={4} background="#E9F9FF">
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

          <Text
            position="absolute"
            right="0"
            cursor="pointer"
            fontSize="2xl"
            color="black"
            onClick={() => navigate("/book")}
            _hover={{ textDecoration: "underline" }}
            mr={4}
          >
            도감
          </Text>
        </Box>
      </Box>

      {/* 생물 카드 그리드 */}
      <Box
        width="100%"
        overflowX="auto"
        px={4}
        py={4}
        display="flex"
        alignItems="center"
      >
        <Flex justify="start" alignItems="center">
          {speciesCards.map((species) => (
            <Card
              key={species.name}
              bg="white"
              borderRadius="lg"
              boxShadow="xl"
              overflow="hidden"
              transition="transform 0.2s"
              minW="350px"
              maxW="350px"
              mx={3}
              onClick={() => handleCardClick(species)}
            >
              <CardBody>
                <Flex alignItems="center" p={3}>
                  <Box
                    bg="gray.200"
                    borderRadius="full"
                    boxSize="125px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    overflow="hidden"
                    boxShadow="md"
                  >
                    <Image
                      src={species.image}
                      alt={species.name}
                      boxSize="100%"
                    />
                  </Box>
                  <Box ml={6}>
                    <Heading size="md" mb={2}>
                      {species.name}
                    </Heading>
                    <Flex alignItems="center" gap="6px">
                      <Text fontSize="xl" fontWeight="bold">
                        멸종 등급:
                      </Text>
                      <Text
                        fontSize="xl"
                        color={getStatusColor(species.extinctionStatus)}
                      >
                        {species.extinctionStatus}
                      </Text>
                    </Flex>
                    <Badge
                      colorScheme={species.status === "new" ? "yellow" : "gray"}
                      borderRadius="full"
                      px={4}
                      py={1}
                      mt={2}
                      fontSize={"md"}
                    >
                      {species.status === "new"
                        ? "새로운 발견!"
                        : "이미 발견됨"}
                    </Badge>
                  </Box>
                </Flex>
              </CardBody>
            </Card>
          ))}
          <Box minW="10px" />
        </Flex>
      </Box>

      {/* 모달 */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay />
        <ModalContent padding="20px" borderRadius="10px" maxWidth={cardSize}>
          <ModalCloseButton mt={2} />
          {selectedSpecies && (
            <>
              <ModalHeader fontSize="2xl" textAlign="center" w="100%" mt={-5}>
                {selectedSpecies.name}
              </ModalHeader>
              <ModalBody textAlign="center">
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
                  mb={4}
                >
                  <Image
                    src={selectedSpecies.image}
                    alt={selectedSpecies.name}
                    boxSize="100%"
                  />
                </Box>
                <Flex alignItems="center" justifyContent="center" gap="4px">
                  <Text fontSize="xl" fontWeight="bold">
                    멸종 등급:
                  </Text>
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color={getStatusColor(selectedSpecies.extinctionStatus)}
                  >
                    {selectedSpecies.extinctionStatus}
                  </Text>
                </Flex>
                <Text mt="10px" fontSize="lg" textAlign={"left"}>
                  {selectedSpecies.description}
                </Text>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        mt={20}
      >
        <Button
          onClick={() => navigate("/camera")}
          colorScheme="blue"
          variant="outline"
          background={"white"}
          width="150%"
          boxShadow={"md"}
        >
          계속 촬영하기
        </Button>
      </Box>
    </Box>
  );
};

export default AnalysisPage;
