import { Box, Button, Center, Heading, HStack, Text } from "@chakra-ui/react";
import { Card } from "./Card";

interface MobileProps {}

export function Mobile(props: MobileProps) {
  const {} = props;

  return (
    <>
      <Center flexDir="column" textAlign="center" px="160px" color="black">
        <Heading fontSize="6xl">Applications mobiles</Heading>
        <Text mt={8}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          condimentum odio in purus volutpat accumsan. Ut suscipit, urna nec
          aliquam eleifend, enim orci auctor nibh, at congue nisi tortor sit
          amet quam.
        </Text>
        <Button mt={12} colorScheme="blackAlpha">
          Découvrir React
        </Button>
      </Center>
      <Center>
        <HStack mr={10} spacing={4}>
          <Card />
          <Card />
          <Card />
        </HStack>
      </Center>
    </>
  );
}
