import { Box, Flex, Heading, HStack, Image } from "@chakra-ui/react";
import { useHeaderName } from "../../hooks/useHeaderName";
import { colors } from "../../theme/colors";
import { DrawerMenu } from "./DrawerMenu";
import { LinkItem } from "./LinkItem";

interface HeaderProps {}

export function Header(props: HeaderProps) {
  const {} = props;

  const header = useHeaderName();

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
        <Box w="300px">
          <Image src="/images/logo.png" w={50} h={50} />
        </Box>
        <Heading size="md">{header}</Heading>
        <Flex justifyContent="space-between" w="300px">
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
