import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Text,
  useDisclosure,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { List, X } from "phosphor-react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { sleep } from "../../utils/promise";
import { useScrollContainerContext } from "../ScrollContainer/useScrollContainerContext";

interface DrawerMenuProps {}

export function DrawerMenu(props: DrawerMenuProps) {
  const {} = props;

  const { isOpen, onClose, onOpen } = useDisclosure();

  const { scrollTo } = useScrollContainerContext();

  const { pathname } = useLocation();

  function LinkItem({
    label,
    href,
    hash,
    top,
  }: {
    label: string;
    href: string;
    hash?: string;
    top?: number;
  }) {
    return (
      <RouterLink
        to={{ pathname: href }}
        onClick={async () => {
          onClose();
          if (hash != undefined || top != undefined) {
            await sleep(pathname != href ? 500 : 0);
            scrollTo(top != undefined ? { top } : { selector: hash });
          }
        }}
      >
        {label}
      </RouterLink>
    );
  }

  return (
    <>
      <Box
        as={List}
        size={32}
        color="theme.100"
        cursor="pointer"
        transition="color .2s"
        _hover={{
          color: "theme.200",
        }}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} onClose={onClose} size="md" autoFocus={false}>
        <DrawerOverlay />
        <DrawerContent px={20} pb={10} bg="theme.400" color="white">
          <DrawerBody mt={20} fontSize="lg" position="relative">
            <Box
              as={X}
              position="absolute"
              right={0}
              top={0}
              color="redwhite"
              boxSize="32px"
              cursor="pointer"
              rounded="md"
              p={1}
              transition="all .2s"
              onClick={onClose}
              _hover={{
                color: "theme.400",
              }}
            />
            <VStack align="flex-start" spacing={5}>
              <LinkItem label="Accueil" href="/" top={0} />
              <LinkItem label="Mes services" href="/" hash="#services" />
              <LinkItem label="A propos de moi" href="/" hash="#about" />
              <LinkItem label="Mes projets" href="/projects" />
              <ChakraLink
                href="mailto:luc.gireaud@gmail.com"
                _hover={{
                  textDecor: "none",
                }}
              >
                Contact
              </ChakraLink>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Text color="white">?? {new Date().getFullYear()} Luc Gireaud</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
