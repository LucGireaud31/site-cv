import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

interface CardProps {
  isActive: boolean;
  index: number;
  doAnimation: boolean;
}

export function Card(props: CardProps) {
  const { isActive, index, doAnimation } = props;

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
        bg="theme.500"
        rounded="md"
        color="white"
        p={6}
        textAlign="center"
        spacing={8}
      >
        <Heading mt={2} size={isHover ? "xl" : "lg"} transition="all 0.5s">
          Un super titre
        </Heading>
        <Image
          src="/images/test.webp"
          h={isHover ? "150px" : "100px"}
          rounded="lg"
          transition="all 0.5s"
        />
        <Text w="280px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          condimentum odio in purus volutpat accumsan. Ut suscipit, urna nec
          aliquam eleifend, enim orci auctor nibh, at congue nisi tortor sit
          amet quam. Ut lobortis augue consequat lectus tincidunt cursus.
        </Text>
      </VStack>
    </Box>
  );
}
