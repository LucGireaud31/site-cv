import { Box, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { colors } from "../../theme/colors";

interface CardProps {
  title: string;
  lines: string[];
  children: ReactNode;
}

export function Card(props: CardProps) {
  const { title, lines, children } = props;

  return (
    <VStack
      w="400px"
      bg="white"
      rounded="2xl"
      color="black"
      pt={5}
      pb={8}
      spacing={5}
      position="relative"
    >
      <Text fontWeight="bold" size="lg" mb={2}>
        {title}
      </Text>
      {lines.map((line, i) => (
        <Text key={i} color="gray">
          {line}
        </Text>
      ))}
      {children}
    </VStack>
  );
}
