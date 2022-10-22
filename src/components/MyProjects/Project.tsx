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
  HStack,
} from "@chakra-ui/react";
import { ReactNode, useMemo } from "react";
import { GitHubLink } from "./GitHubLink";

interface ProjectProps {
  title: string;
  children: ReactNode;
  reversed?: boolean;
  hrefGit: string;
  imgSrc: string;
}

export function Project(props: ProjectProps) {
  const { title, children, reversed, hrefGit, imgSrc } = props;

  const EmptyBox = useMemo(() => <Image src={imgSrc} rounded="xl" />, []);

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
            <Heading size="lg" color="black" pt={1}>
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
