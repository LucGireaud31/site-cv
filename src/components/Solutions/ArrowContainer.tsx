import { Box, HStack } from "@chakra-ui/react";
import { ArrowLeft, ArrowRight } from "phosphor-react";

interface ArrowContainerProps {
  onChange(type: "increment" | "decrement"): void;
}

export function ArrowContainer(props: ArrowContainerProps) {
  const { onChange } = props;

  return (
    <HStack
      position="absolute"
      bottom="50px"
      left="0"
      w="full"
      justifyContent="center"
      color="white"
      spacing={10}
    >
      <Arrow direction="left" onClick={() => onChange("decrement")} />
      <Arrow direction="right" onClick={() => onChange("increment")} />
    </HStack>
  );
}

function Arrow({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick(): void;
}) {
  return (
    <Box
      as={direction == "left" ? ArrowLeft : ArrowRight}
      bg="white"
      color="theme.500"
      boxSize="60px"
      rounded="full"
      p={3}
      cursor="pointer"
      _hover={{
        bg: "gray.200",
      }}
      transition="all .5s"
      onClick={onClick}
    />
  );
}
