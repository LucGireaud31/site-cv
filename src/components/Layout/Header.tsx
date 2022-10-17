import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import { colors } from "../../theme/colors";
import { DrawerMenu } from "./DrawerMenu";
import { LinkItem } from "./LinkItem";

interface HeaderProps {}

export function Header(props: HeaderProps) {
  const {} = props;

  return (
    <Box
      py={6}
      px="150px"
      position="sticky"
      top="0"
      zIndex={50}
      borderColor="theme.400"
      bg="backgroundLight"
      w="calc(100vw + 100px)"
      ml="-50px"
      boxShadow={`0px 10px 10px ${colors.backgroundLight}`}
    >
      <Flex alignItems="center" justifyContent="space-between" px="100px">
        <Image src="/images/logo.png" w={50} h={50} />
        <Flex justifyContent="space-between">
          <HStack spacing={8} mr={50}>
            <LinkItem label="Accueil" href="/" />
            <LinkItem label="Mes projets" href="/projects" />
          </HStack>
          <DrawerMenu />
        </Flex>
      </Flex>
    </Box>
  );
}
