import { Box, Container, Flex, Image, HStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { darkTheme, lightTheme, theme } from "../../theme/colors";
import { LinkItem } from "./LinkItem";

export function Layout() {
  return (
    <Box bg={lightTheme} color={theme} w="full" h="100vh">
      <Container maxW="8xl" pt={8} mb={6}>
        <Flex alignItems="center" justifyContent="space-between">
          <Image src="/images/logo.png" w={50} h={50} />
          <Flex justifyContent="space-between">
            <HStack spacing={8} mr={50}>
              <LinkItem label="Accueil" href="/" />
              <LinkItem label="A propos" href="/#about" />
              <LinkItem label="Mes projets" href="/projects" />
            </HStack>
            <Box
              border="2px solid"
              fontWeight="bold"
              py={2}
              px={10}
              ml={15}
              cursor="pointer"
              _hover={{
                color: lightTheme,
                bg: theme,
              }}
              _active={{
                bg: darkTheme,
              }}
            >
              Mon CV
            </Box>
          </Flex>
        </Flex>
        <Box w="full" h="1px" bg={`${theme}50`} mt={6} />
      </Container>
      <Outlet />
    </Box>
  );
}
