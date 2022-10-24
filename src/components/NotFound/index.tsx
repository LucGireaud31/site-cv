import { Box, Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./index.css";

interface NotFoundProps {}

export function NotFound(props: NotFoundProps) {
  const {} = props;

  const navigate = useNavigate();

  return (
    <Box
      color="white"
      textAlign="center"
      bgGradient="linear(to-r,theme.600,theme.400)"
    >
      <Center h="85vh" flexDir="column">
        <VStack>
          <Heading size="4xl">404</Heading>
          <Text fontSize="18px" color="gray.200">
            La page que vous cherchez est introuvable
          </Text>
        </VStack>
        <Button mt="50px" onClick={() => navigate("/")}>
          Retourner sur le site
        </Button>
      </Center>

      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </Box>
  );
}
