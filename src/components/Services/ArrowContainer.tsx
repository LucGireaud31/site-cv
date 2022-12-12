import { Box, HStack } from "@chakra-ui/react";
import { ArrowLeft, ArrowRight } from "phosphor-react";

interface ArrowContainerProps {
  onChange(type: "increment" | "decrement"): void;
  isDisabled: boolean;
}

export function ArrowContainer(props: ArrowContainerProps) {
  const { onChange, isDisabled } = props;

  return (
    <HStack
      position="absolute"
      bottom="70px"
      left="0"
      w="full"
      justifyContent="center"
      color="white"
      spacing={10}
    >
      <Arrow
        direction="left"
        onClick={() => onChange("decrement")}
        isDisabled={isDisabled}
      />
      <Arrow
        direction="right"
        onClick={() => onChange("increment")}
        isDisabled={isDisabled}
      />
    </HStack>
  );
}

function Arrow({
  direction,
  onClick,
  isDisabled,
}: {
  direction: "left" | "right";
  onClick(): void;
  isDisabled: boolean;
}) {
  return (
    <Box
      as={direction == "left" ? ArrowLeft : ArrowRight}
      bg="white"
      color="theme.400"
      boxSize="60px"
      rounded="full"
      p={3}
      cursor="pointer"
      _hover={{
        bg: "gray.400",
      }}
      _active={{
        bg: "gray.500",
      }}
      transition="all .2s"
      onClick={() => !isDisabled && onClick()}
    />
  );
}
