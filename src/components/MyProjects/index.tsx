import { Box, Container, Heading } from "@chakra-ui/react";
import { useLocationChange } from "../../hooks/useLocationChange";
import { MultiScrollCards } from "../ScrollCard/MultiScrollCard";

interface MyProjectsProps {}

export function MyProjects(props: MyProjectsProps) {
  const {} = props;

  useLocationChange();

  return (
    <>
      <Box minH="100vh">
        <Heading textAlign="center" pt={50} id="projects">
          Mes projets
        </Heading>
        <MultiScrollCards
          cards={[
            {
              img1: "3d/apsio-ssi.hdr",
              img2: "3d/apsio-ssi2.hdr",
              zoom: 8,
              mesh: {
                color: "#008990",
              },
            },

            // { img1: "3d/apsio_coin2.hdr", img2: "3d/apsio_coin.hdr", zoom: 8 },
          ]}
          offset={93 + 98}
        />
      </Box>
      {/* <Container maxW="8xl" pb="100px" zIndex={99}>
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
      </Container> */}
    </>
  );
}
