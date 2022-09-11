import { Box, Text, Image, Center, useToast, Link } from "@chakra-ui/react";
import { colors } from "../../theme/colors";

interface ProfilPictureProps {}

export function ProfilPicture(props: ProfilPictureProps) {
  const {} = props;

  const toast = useToast();

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
        cursor="pointer"
        onClick={() => {
          navigator.clipboard.writeText("lucgireaud@gmail.com").then(() =>
            toast({
              title: "Mail copié ",
              status: "success",
              duration: 3000,
              position: "top",
            })
          );
        }}
      >
        <Image src="/images/gmail.png" w={25} />
      </Center>
      <Link
        right={40}
        zIndex={5}
        top={10}
        position="absolute"
        href="https://www.linkedin.com/in/luc-gireaud-09b04b245"
        target="_blank"
      >
        <Image src="/images/linked_in.png" w="40px" h="40px" />
      </Link>
      <Link
        top={250}
        right="95px"
        position="absolute"
        target="_blank"
        zIndex={5}
        href="https://www.facebook.com/luc.gireaud.v3"
      >
        <Image
          src="/images/facebook.png"
          w="40px"
          h="40px"
          rounded="full"
          zIndex={5}
        />
      </Link>
    </Box>
  );
}
