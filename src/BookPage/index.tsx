import {
  Box,
  SimpleGrid,
  Text,
  Container,
  Heading,
  Progress,
  Card,
  CardBody,
} from "@chakra-ui/react";

const BookPage = () => {
  const marineLife = [
    "뱅가이카디널",
    "보라양쥐돔",
    "돛지느러미양쥐돔",
    "긴코초록놀래기",
    "할리퀸터스크",
    "그린크로미스",
    "줄셋돔",
    "금강바리",
    "초코칩불가사리",
    "두동가리돔",
    "청줄돌돔",
    "샛별돔",
    "파랑돔",
    "큰양놀래기",
    "아라비아청줄돔",
    "붉은이빨쥐치",
    // ... 나머지 생물들
  ];

  const totalCards = 117;
  const discoveredCards = 7;

  return (
    <Box h="100vh" display="flex" flexDirection="column">
      <Container maxW="container.xl" py={4} flex="none">
        <Heading size="lg" mb={2}>
          도감
        </Heading>
        <Text mb={2}>물고기를 모아 나만의 아쿠아리움을 완성하세요</Text>
        <Box position="relative" mb={4}>
          <Progress
            value={(discoveredCards / totalCards) * 100}
            size="sm"
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

      <Box
        flex="1"
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "8px",
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
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={3} mx="auto">
            {marineLife.map((fish, index) => (
              <Card
                key={index}
                bg="gray.100"
                maxW="160px"
                w="100%"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                transition="all 0.2s"
              >
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
                    <Text color="gray.400" fontSize="xs">
                      이미지
                    </Text>
                  </Box>
                  <Text
                    textAlign="center"
                    fontWeight="medium"
                    fontSize="xs"
                    noOfLines={2}
                  >
                    {fish}
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
