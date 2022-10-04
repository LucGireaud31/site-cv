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
} from "@chakra-ui/react";
import { List } from "phosphor-react";

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
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
