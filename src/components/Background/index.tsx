import { Box, Text } from "@chakra-ui/react";
import { colors } from "../../theme/colors";

interface BackgroundProps {}

export function Background(props: BackgroundProps) {
  const {} = props;

  return (
    <Box zIndex={-1} position="absolute" w="full" h="100vh">
      {/* <Box
        filter="blur(30px)"
        bg={`${colors.theme[400]}90`}
        boxSize="100vh"
        zIndex={1}
        position="absolute"
        rounded="full"
        left="-30vh"
        top="40vh"
      /> */}
    </Box>
  );
}
