import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Frame } from "./Frame";

interface AboutProps {}

export function About(props: AboutProps) {
  const {} = props;

  return (
    <Container
      maxW="8xl"
      h="calc(100vh - 80px)"
      display="flex"
      alignItems="center"
      id="about"
    >
      <HStack align="center" justifyContent="center" spacing="150px">
        <Frame />
        <VStack w="40%" align="left" spacing={10}>
          <Box>
            <Heading color="theme.100">A propos de moi</Heading>
            <Box w="150px" h="8px" bg="theme.400" rounded="sm" mt={2} />
          </Box>
          <Text color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            condimentum odio in purus volutpat accumsan. Ut suscipit, urna nec
            aliquam eleifend, enim orci auctor nibh, at congue nisi tortor sit
            amet quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce condimentum odio in purus volutpat accumsan. Ut suscipit, urna
            nec aliquam eleifend, enim orci auctor nibh, at congue nisi tortor
            sit amet quam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Fusce condimentum odio in purus volutpat accumsan. Ut
            suscipit, urna nec aliquam eleifend, enim orci auctor nibh, at
            congue nisi tortor sit amet quam.
          </Text>
          <HStack>
            <Button bg="theme.400" _hover={{ bg: "theme.500" }}>
              Me contacter
            </Button>
            <Button
              as="a"
              variant="outline"
              href="/documents/cv.pdf"
              target="_blank"
              color="gray.300"
            >
              Télécharger mon CV
            </Button>
          </HStack>
        </VStack>
      </HStack>
    </Container>
  );
}
