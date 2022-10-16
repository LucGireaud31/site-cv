import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { List } from "phosphor-react";
import { Link } from "react-router-dom";

interface DrawerMenuProps {}

export function DrawerMenu(props: DrawerMenuProps) {
  const {} = props;

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Box
        as={List}
        size={32}
        color="theme.500"
        cursor="pointer"
        _hover={{
          color: "black",
        }}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent px={20} pb={10} bg="theme.500" color="white">
          <DrawerBody mt={20} fontSize="lg" position="relative">
            <DrawerCloseButton right={0} top={0} size="lg" color="white" />
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

function LinkItem({ label }: { label: string }) {
  return <Link to="">{label}</Link>;
}
