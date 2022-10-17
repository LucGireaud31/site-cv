import {
  Container,
  Heading,
  Text,
  VStack,
  Image,
  HStack,
} from "@chakra-ui/react";
import { Card } from "./Card";
import { LogoWithSatellites } from "./LogoWithSatellites";

interface AboutProps {}

export function About(props: AboutProps) {
  const {} = props;

  return (
    <Container maxW="8xl" h="calc(100vh - 107px - 24px)">
      <Heading textAlign="center" pt={50} id="about">
        A propos
      </Heading>
      <VStack mt="70px" spacing="100px">
        <HStack spacing="150px">
          <Card
            title="J'utilise ces technologies"
            lines={["React", "React Native", "Vite.js"]}
          >
            <>
              <Image
                src="/images/react.png"
                w="32px"
                position="absolute"
                left={50}
                top={10}
              />
              <Image
                src="/images/vite.png"
                w="32px"
                position="absolute"
                left={50}
                bottom={10}
              />
              <Text position="absolute" right={50} top="40%">
                💪
              </Text>
            </>
          </Card>
        </HStack>
        <HStack spacing="150px">
          <Image src="images/communication.png" w="200px" />
          <Card
            title="Outils de communication"
            lines={[
              "Figma (pour les maquettes)",
              "Google meet (si rdv à distance)",
              "Google drive (partage de docs)",
            ]}
          >
            <>
              <Image
                src="/images/google_drive.png"
                w="25px"
                position="absolute"
                left={50}
                top="40%"
              />
              <Image
                src="/images/figma.svg"
                w="18px"
                position="absolute"
                right={50}
                top={10}
              />
              <Image
                src="/images/google_meet.png"
                w="25px"
                position="absolute"
                right={50}
                bottom={10}
              />
            </>
          </Card>
        </HStack>
      </VStack>
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
