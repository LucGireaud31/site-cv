import { Box, Container, Flex, Image, HStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { colors } from "../../theme/colors";
import { LinkItem } from "./LinkItem";

export function Layout() {
  return (
    <Box bg="theme.300" color="theme.500" w="full">
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
                color: "theme.300",
                bg: "theme.500",
              }}
              _active={{
                bg: "darkTheme.700",
              }}
            >
              Mon CV
            </Box>
          </Flex>
        </Flex>
        <Box w="full" h="1px" bg={`${colors.theme["500"]}50`} mt={6} />
      </Container>
      <Outlet />
    </Box>
  );
}
