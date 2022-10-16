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
      bottom="100px"
      left="0"
      w="full"
      justifyContent="center"
      color="white"
      spacing={10}
      zIndex={9999}
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
      color="theme.500"
      boxSize="60px"
      rounded="full"
      p={3}
      cursor="pointer"
      _hover={{
        bg: "gray.200",
      }}
      transition="all .5s"
      onClick={() => !isDisabled && onClick()}
    />
  );
}
