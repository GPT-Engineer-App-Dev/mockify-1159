import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { FaCoins } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="green.700" minH="100vh" py={8}>
      <Heading as="h1" size="xl" textAlign="center" color="white" mb={8}>
        Texas Hold'em Poker
      </Heading>

      <Flex justify="center" mb={8}>
        <Box border="1px" borderColor="gray.200" rounded="lg" p={4} bg="white" w="120px" h="180px" mr={4}></Box>
        <Box border="1px" borderColor="gray.200" rounded="lg" p={4} bg="white" w="120px" h="180px" mr={4}></Box>
        <Box border="1px" borderColor="gray.200" rounded="lg" p={4} bg="white" w="120px" h="180px" mr={4}></Box>
        <Box border="1px" borderColor="gray.200" rounded="lg" p={4} bg="white" w="120px" h="180px" mr={4}></Box>
        <Box border="1px" borderColor="gray.200" rounded="lg" p={4} bg="white" w="120px" h="180px"></Box>
      </Flex>

      <Flex justify="center">
        <Box border="1px" borderColor="gray.200" rounded="lg" p={4} bg="white" w="120px" h="180px" mr={4}></Box>
        <Box border="1px" borderColor="gray.200" rounded="lg" p={4} bg="white" w="120px" h="180px"></Box>
        <Flex align="center" ml={8}>
          <FaCoins size={24} color="gold" />
          <Box as="span" ml={2} fontSize="xl" color="white">
            5000
          </Box>
        </Flex>
      </Flex>

      <Flex justify="center" mt={8}>
        <Button size="lg" colorScheme="blue" mr={4}>
          Bet
        </Button>
        <Button size="lg" colorScheme="teal" mr={4}>
          Call
        </Button>
        <Button size="lg" colorScheme="red">
          Fold
        </Button>
      </Flex>
    </Box>
  );
};

export default Index;
