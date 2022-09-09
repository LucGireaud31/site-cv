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
    <Container maxW="8xl" h="100vh">
      <Heading textAlign="center" mt={50}>
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
          <LogoWithSatellites />
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
    </Container>
  );
}
