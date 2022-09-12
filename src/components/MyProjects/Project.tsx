import {
  VStack,
  Image,
  Grid,
  Heading,
  Flex,
  useDisclosure,
  Modal,
  ModalContent,
  ModalOverlay,
  Box,
} from "@chakra-ui/react";
import { ReactNode, useMemo } from "react";
import { GitHubLink } from "./GitHubLink";

interface ProjectProps {
  title: string;
  children: ReactNode;
  reversed?: boolean;
  hrefGit: string;
}

export function Project(props: ProjectProps) {
  const { title, children, reversed, hrefGit } = props;

  const EmptyBox = useMemo(() => <Box h="300px" w="full" />, []);

  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)">
        {reversed && EmptyBox}
        <Flex
          flexDir="column"
          justifyContent="center"
          textAlign="center"
          mx={20}
        >
          <Flex justifyContent="center">
            <Heading size="lg" color="black">
              {title}
            </Heading>
            <GitHubLink href={hrefGit} />
          </Flex>
          <VStack mt={10} color="gray.500" fontWeight="semibold" spacing={5}>
            {children}
          </VStack>
        </Flex>
        {!reversed && EmptyBox}
      </Grid>
    </>
  );
}
