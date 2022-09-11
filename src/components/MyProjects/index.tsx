import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Highlight } from "../shared/Highlight";
import { PlayStoreLink } from "./PlayStoreLink";
import { Project } from "./Project";
import { WebLink } from "./WebLink";

interface MyProjectsProps {}

export function MyProjects(props: MyProjectsProps) {
  const {} = props;

  return (
    <Container maxW="8xl" pb="100px">
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
            Une application qui permet de garder en mémoire les informations
            personnelles de l’utilisateur et de les partager rapidemment.
            <br></br>
            <br></br>
            Pour <Highlight>partager les données</Highlight>, il est possible de
            générer un Qr Code qui sera scanné par le destinataire.
          </Text>
          <PlayStoreLink href="" />
        </Project>
        <Project
          title="Apsio Coin Manager"
          image="images/apsio_coin.png"
          reversed
        >
          <Text as="p">
            Application web à destination des utilisateurs de la blockchain{" "}
            <Highlight>APSIO</Highlight>. Un professeur peut faire l'appel de sa
            classe afin que les élèves présents soient récompensés en
            APSIO-Coin.
            <br></br>
            <br></br>
            Développée en 2021-2022 par <Highlight>
              Luc Gireaud
            </Highlight> et <Highlight>Nicolas Saysset</Highlight> pour un
            mémoire de la license professionnelle APSIO, cette{" "}
            <Highlight>blockchain</Highlight> vise à améliorer le système
            scolaire en rémunérant les étudiants assidus.
          </Text>
          <Flex justifyContent="space-around" w="full">
            <WebLink
              href="
            https://apsio-coin-manager.netlify.app"
              title="Voir mon site"
              icon="images/apsio-coin-icon.png"
            />
            <WebLink
              href="
              https://docs.google.com/document/d/1_Lj_FC62a9eu8SuOCEciO-JBEa869KS-W_V6vyG28N8/edit?usp=sharing"
              title="Lire notre mémoire"
              icon="images/memoire-icon.png"
            />
          </Flex>
        </Project>
      </VStack>
    </Container>
  );
}
