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
import { Card3D } from "../3D/Cards";
import { Highlight } from "../shared/Highlight";
import { PlayStoreLink } from "./PlayStoreLink";
import { Project } from "./Project";
import { WebLink } from "./WebLink";

interface MyProjectsProps {}

export function MyProjects(props: MyProjectsProps) {
  const {} = props;

  return (
    <>
      <Container maxW="8xl">
        <Heading textAlign="center" pt={50} id="projects">
          Mes projets
        </Heading>
      </Container>
      <Card3D />
      <Container maxW="8xl" pb="100px">
        <VStack mt="200px" spacing="150px">
          <Project
            title="Apsio SSI"
            hrefGit="https://github.com/LucGireaud31/apsio-ssi"
          >
            <Text>
              Une application qui permet de garder en mémoire les informations
              personnelles de l’utilisateur et de les partager rapidemment.
              <br></br>
              <br></br>
              Pour <Highlight>partager les données</Highlight>, il est possible
              de générer un Qr Code qui sera scanné par le destinataire.
            </Text>
            <PlayStoreLink href="https://play.google.com/store/apps/details?id=com.luc.gireaud.apsiossi&gl=FR" />
          </Project>
          <Project
            title="Apsio Coin Manager"
            reversed
            hrefGit="https://github.com/LucGireaud31/apsio-coin-manager"
          >
            <Text as="p">
              Application web à destination des utilisateurs de la blockchain{" "}
              <Highlight>APSIO</Highlight>. Un professeur peut faire l'appel de
              sa classe afin que les élèves présents soient récompensés en
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
    </>
  );
}
