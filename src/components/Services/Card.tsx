import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Gauge } from "phosphor-react";
import { ReactNode, useState } from "react";
import { Highlight } from "../shared/Highlight";
import { CompanyBulletPoint } from "./CompanyBulletPoint";

interface CardProps {
  isActive: boolean;
  index: number;
  doAnimation: boolean;
  theme: string;
  type: "web" | "mobile";
}

export function Card(props: CardProps) {
  const { isActive, index, doAnimation, theme, type } = props;

  const [isHover, setIsHover] = useState(false);

  const data: { [key: string]: any } = {
    web: {
      title: ["Rapide", "Des extensions", "Fiable"],

      content: [
        <>
          Ne pas recharger toutes les données à chaque changement de page permet
          d'augmenter l'expérience de l'utilisateur grâce à{" "}
          <Highlight color={theme}>
            une <Highlight>fluidité</Highlight> incroyable
          </Highlight>
          .
        </>,

        <>
          Permet d'ajouter des{" "}
          <Highlight color={theme}>
            fonctionnalités <Highlight>gratuites</Highlight> et{" "}
            <Highlight>complexes</Highlight>
          </Highlight>{" "}
          rapidement. <br />
          <br />
          Ainsi, il est possible d'avoir un site web complètement{" "}
          <Highlight color={theme}>personnalisable</Highlight>.
        </>,
        <>
          React est utilisé par les plus grands, tels que Facebook bien sûr,
          mais aussi : <br />
          <CompanyBulletPoint label="Airbnb" fileName="airbnb.png" />
          <CompanyBulletPoint label="Instagram" fileName="instagram.webp" />
          <CompanyBulletPoint label="Netflix" fileName="netflix.png" />
          <CompanyBulletPoint label="Paypal" fileName="paypal.webp" />
        </>,
      ],
      icon: [Gauge, "", ""],
    },
    mobile: {
      title: ["Multi-plateforme", "Similaire à React", "Fiable"],
      content: [
        <>
          React native permet de{" "}
          <Highlight color={theme}>
            gagner énormément de <Highlight>temps</Highlight>
          </Highlight>
          . Effectivement, elle est compatible avec Android et iOS.
          <br /> <br />
          Il est aussi plus{" "}
          <Highlight color={theme}>facile et rapide de maintenir</Highlight> une
          seule application que deux.
        </>,
        <>
          Cela me permet de{" "}
          <Highlight color={theme}>maitriser une seule technologie</Highlight>{" "}
          tout en proposant plusieurs produits (web et mobile). <br />
          <br />
          Pratique quand on débute 😉.
        </>,
        <>
          La technologie que je vous propose est utilisée par les plus grands :
          <CompanyBulletPoint label="Facebook" fileName="facebook.png" />
          <CompanyBulletPoint label="Uber eats" fileName="uber-eats.png" />
          <CompanyBulletPoint label="Playstation" fileName="playstation.png" />
          <CompanyBulletPoint label="Xbox" fileName="xbox.png" />
        </>,
      ],
      icon: ["", "", ""],
    },
  };

  return (
    <Box
      className={`animate__animated animate__zoom${isActive ? "In" : "Out"}`}
      style={{
        animationDelay:
          isActive && doAnimation ? `${500 + index * 200}ms` : "0",
        animationDuration: doAnimation ? "700ms" : "0s",
      }}
      w="380px"
      h="450px"
      p={7}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...(isHover && {
        p: 0,
      })}
      transition="all 0.5s"
      zIndex={1}
    >
      <Box
        h="full"
        rounded="md"
        p={6}
        textAlign="center"
        boxShadow="xs"
        bg="theme.500"
        pb={2}
      >
        <Heading
          mt={2}
          size={isHover ? "xl" : "lg"}
          transition="all 0.5s"
          color={theme}
          w="fit-content"
          mx="auto"
        >
          {data[type].title[index]}
        </Heading>
        <Center h="full" pb={12}>
          <Text fontSize={16} color="white" w="260px">
            {data[type].content[index]}
          </Text>
        </Center>
      </Box>
    </Box>
  );
}
