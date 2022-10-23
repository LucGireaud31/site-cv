import { Box, Flex, Text } from "@chakra-ui/react";
import { useLocationChange } from "../../hooks/useLocationChange";
import { limitNumber } from "../../utils/number";
import { MultiScrollCards } from "../ScrollCard/MultiScrollCard";
import { useScrollContainerContext } from "../ScrollContainer/useScrollContainerContext";
import { Highlight } from "../shared/Highlight";
import { ProjectContent } from "./ProjectContent";
import { WebLink } from "../shared/WebLink";
import { PlayStoreLink } from "../shared/PlayStoreLink";

interface MyProjectsProps {}

export function MyProjects(props: MyProjectsProps) {
  const {} = props;

  useLocationChange();

  const { scrollTop } = useScrollContainerContext();

  const scrollRatioP1 = limitNumber((scrollTop - 98) / 1200, 0, 1);
  const scrollRatioP2 = limitNumber(
    (scrollTop - 1200 - document.documentElement.clientHeight - 98) / 1200,
    0,
    1
  );
  console.log(
    scrollRatioP2,
    scrollTop,
    1200 + document.documentElement.clientHeight + 98
  );
  const projectsContentRenders = {
    ApsioSSI: (
      <ProjectContent
        scrollRatio={scrollRatioP1}
        title="Apsio SSI"
        gitLink="https://github.com/LucGireaud31/apsio-ssi"
        body={
          <Text>
            Une application qui permet de garder en mémoire les informations
            personnelles de l’utilisateur et de les partager rapidemment.
            <br />
            <br />
            Pour <Highlight>partager les données</Highlight>, il est possible de
            générer un Qr Code qui sera scanné par le destinataire.
          </Text>
        }
        footer={
          <PlayStoreLink href="https://play.google.com/store/apps/details?id=com.luc.gireaud.apsiossi&gl=FR" />
        }
      />
    ),

    ApsioCoin: (
      <ProjectContent
        scrollRatio={scrollRatioP2}
        title="Apsio Coin Manager"
        gitLink="https://github.com/LucGireaud31/apsio-coin-manager"
        body={
          <Text>
            Application web à destination des utilisateurs de la blockchain{" "}
            <Highlight>APSIO</Highlight>. Un professeur peut faire l'appel de sa
            classe afin que les élèves présents soient récompensés en
            APSIO-Coin.
            <br />
            <br />
            Développée en 2021-2022 par <Highlight>Luc Gireaud</Highlight> lors
            d'un mémoire de la license professionnelle APSIO, cette{" "}
            <Highlight>blockchain</Highlight> vise à améliorer le système
            scolaire en rémunérant les étudiants assidus.
          </Text>
        }
        footer={
          <Flex justifyContent="space-around" w="full">
            <WebLink
              href="
              https://apsio-coin-manager.netlify.app"
              title="Voir le site"
              icon="images/apsio-coin-icon.png"
            />
            <WebLink
              href="
                https://docs.google.com/document/d/1_Lj_FC62a9eu8SuOCEciO-JBEa869KS-W_V6vyG28N8/edit?usp=sharing"
              title="Lire notre mémoire"
              icon="images/memoire-icon.png"
            />
          </Flex>
        }
      />
    ),
  };

  return (
    <Box>
      <MultiScrollCards
        cards={[
          {
            img1: "3d/apsio-ssi.hdr",
            img2: "3d/apsio-ssi2.hdr",
            children: projectsContentRenders.ApsioSSI,
          },
          {
            img1: "3d/apsio_coin2.hdr",
            img2: "3d/apsio_coin.hdr",
            children: projectsContentRenders.ApsioCoin,
          },
        ]}
        offset={98}
      />
      {/* <Container maxW="8xl" pb="100px" zIndex={99}>
        <VStack mt="200px" spacing="150px">
          <Project
            title="Apsio SSI"
            hrefGit="https://github.com/LucGireaud31/apsio-ssi"
            imgSrc="images/apsio-ssi.png"
          >
            <Text>
              Une application qui permet de garder en mémoire les informations
              personnelles de l’utilisateur et de les partager rapidemment.
              <br></br>
              <br></br>
              Pour <Highlight>partager les données</Highlight>, il est possible de
              générer un Qr Code qui sera scanné par le destinataire.
            </Text>
            <PlayStoreLink href="https://play.google.com/store/apps/details?id=com.luc.gireaud.apsiossi&gl=FR" />
          </Project>
          <Project
            title="Apsio Coin Manager"
            reversed
            hrefGit="https://github.com/LucGireaud31/apsio-coin-manager"
            imgSrc="images/apsio_coin.png"
          >
            <Text as="p">
              Application web à destination des utilisateurs de la blockchain{" "}
              <Highlight>APSIO</Highlight>. Un professeur peut faire l'appel de sa
              classe afin que les élèves présents soient récompensés en
              APSIO-Coin.
              <br></br>
              <br></br>
              Développée en 2021-2022 par <Highlight>Luc Gireaud</Highlight> lors
              d'un mémoire de la license professionnelle APSIO, cette{" "}
              <Highlight>blockchain</Highlight> vise à améliorer le système
              scolaire en rémunérant les étudiants assidus.
            </Text>
            <Flex justifyContent="space-around" w="full">
              <WebLink
                href="
              https://apsio-coin-manager.netlify.app"
                title="Voir le site"
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
          <Heading>Bientôt le votre...</Heading>
        </VStack>
        </Container> */}
    </Box>
  );
}
