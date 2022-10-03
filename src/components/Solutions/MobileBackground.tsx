import { Box, Text } from "@chakra-ui/react";

interface MobileBackgroundProps {}

export function MobileBackground(props: MobileBackgroundProps) {
  const {} = props;

  return <Box position="absolute" w="full" h="full" bg="yellow.500"></Box>;
}
