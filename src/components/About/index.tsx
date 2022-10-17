import { Box, Center, Container, Image } from "@chakra-ui/react";

interface AboutProps {}

const SPACE = 20;

export function About(props: AboutProps) {
  const {} = props;

  return (
    <Container
      display="flex"
      alignItems="center"
      maxW="8xl"
      h="calc(100vh - 98px)"
    >
      <Box
        w="400px"
        h="500px"
        position="relative"
        border="8px solid"
        borderColor="theme.500"
      >
        <Box
          position="absolute"
          bottom={`${SPACE}px`}
          left={`${SPACE}px`}
          zIndex={2}
          border="8px solid"
          borderColor="background"
        >
          <Box
            w="400px"
            h="500px"
            bg="background"
            border="8px solid"
            borderColor="theme.500"
            position="relative"
            overflow="hidden"
            zIndex={1}
          >
            <Box
              zIndex={-1}
              bg="yellowBall"
              boxSize="300px"
              position="absolute"
              rounded="full"
              right="-40px"
              top={10}
            />{" "}
            <Box
              zIndex={-1}
              bg="orangeBall"
              boxSize="300px"
              position="absolute"
              rounded="full"
              left="-180px"
              bottom="-50px"
            />
            <Image src="images/luc2_flip.png" />
          </Box>
        </Box>
      </Box>
      <Box w="60%" h="full"></Box>
      {/* <Box
            as="a"
            href="/documents/cv.pdf"
            target="_blank"
            border="2px solid"
            borderColor="theme.500"
            fontWeight="bold"
            py={2}
            px={10}
            ml={15}
            cursor="pointer"
            _hover={{
              color: "white",
              bg: "theme.400",
            }}
          >
            Mon CV
          </Box> */}
    </Container>
  );
}
