import {
  Box,
  Center,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { PlayStoreLink } from "./PlayStoreLink";
import { Project } from "./Project";

interface MyProjectsProps {}

export function MyProjects(props: MyProjectsProps) {
  const {} = props;

  return (
    <Container maxW="8xl" pb="300px">
      <Center pt={50} id="projects">
        <Heading
          color="white"
          bg="theme.500"
          w="fit-content"
          py={2}
          px={8}
          rounded="full"
        >
          Mes projets
        </Heading>
      </Center>

      <VStack mt="150px" spacing="100px">
        <Project title="Apsio SSI" image="images/apsio-ssi.png">
          <Text>
            Application qui permet de garder en mémoire les informations
            personnelles de l’utilisateur et de les partager rapidemment.
            <br></br>
            Par exemple, il serait possible de créer un compte simplement en
            scannant un qr Code.
          </Text>
          <PlayStoreLink href="" />
        </Project>
        <Project title="Apsio SSI" image="images/apsio_coin.png" reversed>
          <Text>
            Application qui permet de garder en mémoire les informations
            personnelles de l’utilisateur et de les partager rapidemment.
            <br></br>
            Par exemple, il serait possible de créer un compte simplement en
            scannant un qr Code.
          </Text>
          <PlayStoreLink
            href="
https://apsio-coin-manager.netlify.app"
          />
        </Project>
      </VStack>
    </Container>
  );
}
