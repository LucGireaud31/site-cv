import { Box, Container, Flex, HStack, Image } from "@chakra-ui/react";
import { List } from "phosphor-react";
import { DrawerMenu } from "./DrawerMenu";
import { LinkItem } from "./LinkItem";

interface HeaderProps {}

export function Header(props: HeaderProps) {
  const {} = props;

  return (
    <Container
      maxW="8xl"
      py={6}
      position="sticky"
      top="0"
      zIndex={50}
      borderBottomWidth={1}
      borderColor="theme.400"
    >
      <Flex alignItems="center" justifyContent="space-between" px="100px">
        <Image src="/images/logo.png" w={50} h={50} />
        <Flex justifyContent="space-between">
          <HStack spacing={8} mr={50}>
            <LinkItem label="Accueil" href="/" />
            <LinkItem label="Mes projets" href="/projects" />
          </HStack>
          <DrawerMenu />
          {/* <Box
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
          </Box> */}
        </Flex>
      </Flex>
    </Container>
  );
}
