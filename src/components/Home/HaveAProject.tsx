import { Box, Flex, Text } from "@chakra-ui/react";

export function HaveAProject() {
  return (
    <Flex mt={150} border="3px solid" borderColor="theme.500" w="fit-content">
      <Box bg="theme.500" w={52} color="white" fontWeight="bold">
        <Text align="center" h="full" pt={4}>
          Vous avez un projet ?
        </Text>
      </Box>
      <Text
        color="theme.500"
        w={52}
        py={4}
        px={8}
        fontWeight="bold"
        align="center"
        cursor="pointer"
        _hover={{
          bg: "theme.400",
          color: "white",
        }}
      >
        Contactez-moi
      </Text>
    </Flex>
  );
}
