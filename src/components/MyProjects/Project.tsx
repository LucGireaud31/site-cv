import {
  VStack,
  Image,
  Grid,
  Heading,
  Flex,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { ReactNode, useMemo } from "react";

interface ProjectProps {
  image: string;
  title: string;
  children: ReactNode;
  reversed?: boolean;
}

export function Project(props: ProjectProps) {
  const { image, title, children, reversed } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const ImageRender = useMemo(
    () => <Image src={image} rounded="2xl" onClick={onOpen} cursor="pointer" />,
    [image]
  );

  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)">
        {reversed && ImageRender}
        <Flex
          flexDir="column"
          justifyContent="center"
          textAlign="center"
          mx={20}
        >
          <Heading size="lg" color="black">
            {title}
          </Heading>
          <VStack mt={10} color="gray.500" fontWeight="semibold" spacing={5}>
            {children}
          </VStack>
        </Flex>
        {!reversed && ImageRender}
      </Grid>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="6xl">
        <ModalOverlay />
        <ModalContent rounded="3xl">
          <Image src={image} rounded="3xl" onClick={onClose} />
        </ModalContent>
      </Modal>
    </>
  );
}
