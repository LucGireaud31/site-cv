import { Box, Image } from "@chakra-ui/react";

const SPACE = 20;

export function Frame() {
  return (
    <Box
      w="400px"
      h="500px"
      position="relative"
      border="8px solid"
      borderColor="theme.500"
    >
      <Box
        position="absolute"
        bottom={`${SPACE}px`}
        left={`${SPACE}px`}
        zIndex={2}
        border="8px solid"
        borderColor="background"
      >
        <Box
          w="400px"
          h="500px"
          bg="background"
          border="8px solid"
          borderColor="theme.500"
          position="relative"
          overflow="hidden"
          zIndex={1}
        >
          <Box
            zIndex={-1}
            bg="yellowBall"
            boxSize="300px"
            position="absolute"
            rounded="full"
            right="-40px"
            top={10}
          />{" "}
          <Box
            zIndex={-1}
            bg="orangeBall"
            boxSize="300px"
            position="absolute"
            rounded="full"
            left="-180px"
            bottom="-50px"
          />
          <Image src="images/luc2_flip.png" />
        </Box>
      </Box>
    </Box>
  );
}
