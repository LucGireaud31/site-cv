import { Box, Flex, Link, Text } from "@chakra-ui/react";

export function HaveAProject() {
  return (
    <Flex mt={150} border="3px solid" borderColor="theme.500" w="fit-content">
      <Box bg="theme.500" w={52} color="white" fontWeight="bold">
        <Text align="center" h="full" pt={4}>
          Vous avez un projet ?
        </Text>
      </Box>
      <Link
        href="mailto:luc.gireaud@gmail.com"
        color="theme.500"
        w={52}
        py={4}
        px={8}
        fontWeight="bold"
        textAlign="center"
        cursor="pointer"
        transition="all .3s"
        _hover={{
          bg: "theme.400",
          color: "white",
        }}
        _active={{
          bg: "theme.500",
        }}
      >
        Contactez-moi
      </Link>
    </Flex>
  );
}
