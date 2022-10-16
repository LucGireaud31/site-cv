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
} from "@chakra-ui/react";
import { List, X } from "phosphor-react";
import { Link } from "react-router-dom";

interface DrawerMenuProps {}

export function DrawerMenu(props: DrawerMenuProps) {
  const {} = props;

  const { isOpen, onClose, onOpen } = useDisclosure();

  function LinkItem({ label }: { label: string }) {
    return (
      <Link
        to=""
        onClick={() => {
          onClose();
        }}
      >
        {label}
      </Link>
    );
  }

  return (
    <>
      <Box
        as={List}
        size={32}
        color="theme.500"
        cursor="pointer"
        transition="color .2s"
        _hover={{
          color: "theme.400",
        }}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent px={20} pb={10} bg="theme.500" color="white">
          <DrawerBody mt={20} fontSize="lg" position="relative">
            <Box
              as={X}
              position="absolute"
              right={0}
              top={0}
              size="lg"
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
              <LinkItem label="Accueil" />
              <LinkItem label="Mes services" />
              <LinkItem label="Mes projets" />
              <LinkItem label="A propos de moi" />
              <LinkItem label="Contact" />
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Text>© 2022 Luc Gireaud</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
