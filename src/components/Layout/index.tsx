import { Box, Center } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { ScrollContainer } from "../ScrollContainer";
import { Highlight } from "../shared/Highlight";
import { Header } from "./Header";

export function Layout() {
  return (
    <Box color="theme.500" id="header" position="relative" bg="background">
      <ScrollContainer maxH="100vh" id="scroll-container">
        <Header />
        <Box zIndex={100}>
          <Outlet />
        </Box>
        <Box w="full" h="1px" bg="theme.400" />
        <Center h="80px">
          © 2022 -<Highlight type="bold">Freelance</Highlight>, Luc Gireaud
        </Center>
      </ScrollContainer>
    </Box>
  );
}
