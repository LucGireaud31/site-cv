import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { ScrollContainer } from "../ScrollContainer";
import { Header } from "./Header";

export function Layout() {
  return (
    <Box color="theme.500" id="header" position="relative" bg="background">
      <ScrollContainer maxH="100vh">
        <Header />

        <Box zIndex={100}>
          <Outlet />
        </Box>
      </ScrollContainer>
    </Box>
  );
}
