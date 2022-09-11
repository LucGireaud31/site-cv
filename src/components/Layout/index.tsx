import { Box, Container, Flex, Image, HStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { colors } from "../../theme/colors";
import { LinkItem } from "./LinkItem";

export function Layout() {
  return (
    <Box
      bgGradient={`linear(to-b,theme.500, theme.300 0.4%)`}
      color="theme.500"
      w="full"
      id="header"
    >
      <Container maxW="8xl" pt={8} mb={6}>
        <Flex alignItems="center" justifyContent="space-between">
          <Image src="/images/logo.png" w={50} h={50} />
          <Flex justifyContent="space-between">
            <HStack spacing={8} mr={50}>
              <LinkItem label="Accueil" href="/" to="header" />
              <LinkItem label="Mes projets" href="#projects" to="projects" />
              <LinkItem label="A propos" href="#about" to="about" />
            </HStack>
            <Box
              as="a"
              href="/documents/cv.pdf"
              target="_blank"
              border="2px solid"
              borderColor="theme.500"
              fontWeight="bold"
              py={2}
              px={10}
              ml={15}
              cursor="pointer"
              _hover={{
                color: "white",
                bg: "theme.400",
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
