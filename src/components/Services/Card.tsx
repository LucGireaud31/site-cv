import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { colors } from "../../theme/colors";
import { Highlight } from "../shared/Highlight";

interface CardProps {
  isActive: boolean;
  index: number;
  doAnimation: boolean;
  theme: string;
}

export function Card(props: CardProps) {
  const { isActive, index, doAnimation, theme } = props;

  const [isHover, setIsHover] = useState(false);

  return (
    <Box
      className={`animate__animated animate__zoom${isActive ? "In" : "Out"}`}
      style={{
        animationDelay:
          isActive && doAnimation ? `${500 + index * 200}ms` : "0",
        animationDuration: doAnimation ? "700ms" : "0s",
      }}
      w="380px"
      h="60vh"
      p={7}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...(isHover && {
        p: 0,
      })}
      transition="all 0.5s"
      zIndex={1}
    >
      <VStack
        h="full"
        rounded="md"
        p={6}
        textAlign="center"
        spacing={8}
        boxShadow="xs"
        bg="theme.500"
      >
        <Heading
          mt={2}
          size={isHover ? "xl" : "lg"}
          transition="all 0.5s"
          color={theme}
        >
          Un super titre
        </Heading>
        <Image
          src="/images/test.webp"
          h={isHover ? "150px" : "100px"}
          rounded="lg"
          transition="all 0.5s"
        />
        <Text w="280px" fontSize={16} color="white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          condimentum odio{" "}
          <Highlight color={theme}>in purus volutpat</Highlight> accumsan. Ut
          suscipit, urna nec aliquam eleifend, enim orci auctor nibh, at congue
          nisi tortor sit amet quam.{" "}
          <Highlight color={theme}>Ut lobortis</Highlight> augue consequat
          lectus tincidunt cursus.
        </Text>
      </VStack>
    </Box>
  );
}
