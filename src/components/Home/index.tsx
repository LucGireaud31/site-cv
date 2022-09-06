import { Box, Container, Heading, Text } from "@chakra-ui/react";

interface HomeProps {}

export function Home(props: HomeProps) {
  const {} = props;

  return (
    <>
      <Container maxW="8xl" mt="90px">
        <Box w="50%" color="black">
          <Heading textAlign="center">Bonjour à tous 👋</Heading>
          <Heading textAlign="center" size="lg" mt={4}>
            Je m'appelle Luc Gireaud
          </Heading>
        </Box>
        <Box w="50%"></Box>
      </Container>
    </>
  );
}
