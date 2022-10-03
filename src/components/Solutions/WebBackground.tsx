import { Box, Text } from "@chakra-ui/react";

interface WebBackgroundProps {}

export function WebBackground(props: WebBackgroundProps) {
  const {} = props;

  return <Box position="absolute" w="full" h="full" bg="orange.500"></Box>;
}
