import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";

interface SpinningProps {}

const keyWords = [
  "Applications mobile",
  "Sites web",
  "Freelance",
  "Développeur front & back",
  "Projets 100% personnalisés",
  "Node",
];

export function Spinning(props: SpinningProps) {
  const {} = props;

  return (
    <Flex h="80px" bg="theme.400">
      <HStack spacing={20} w="fit-content" mx="auto">
        {keyWords.map((word, i) => (
          <Heading key={i} color="white" size="md">
            {word}
          </Heading>
        ))}
      </HStack>
    </Flex>
  );
}
