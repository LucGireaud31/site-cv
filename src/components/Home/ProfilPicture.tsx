import { Box, Text, Image, Center } from "@chakra-ui/react";
import { colors } from "../../theme/colors";

interface ProfilPictureProps {}

export function ProfilPicture(props: ProfilPictureProps) {
  const {} = props;

  return (
    <Box position="relative">
      <Image
        src="/images/luc.png"
        w="500px"
        left="120px"
        mt="-100px"
        zIndex={3}
        position="absolute"
      />
      <Box
        bg={`${colors.theme["500"]}80`}
        boxSize="300px"
        zIndex={2}
        position="absolute"
        rounded="full"
        left="110px"
        top={10}
      />
      <Box
        bg="#FFC30080"
        boxSize="300px"
        zIndex={1}
        position="absolute"
        rounded="full"
        right="110px"
        top="160px"
      />
      <Center
        position="absolute"
        w="40px"
        h="40px"
        bg="white"
        rounded="full"
        top={10}
        left={40}
        zIndex={5}
      >
        <Image src="/images/google.png" w={25} />
      </Center>
      <Image
        src="/images/linked_in.png"
        right={40}
        top={10}
        position="absolute"
        w="40px"
        h="40px"
      />
      <Image
        src="/images/facebook.png"
        top={250}
        right="95px"
        position="absolute"
        w="40px"
        h="40px"
        rounded="full"
        zIndex={5}
      />
    </Box>
  );
}
