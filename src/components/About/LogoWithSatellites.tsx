import { Box, Image, Flex } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const emojis = ["😎", "☕", "🤠"];

export function LogoWithSatellites() {
  const ref0 = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  const refs = [ref1, ref2, ref3];

  useEffect(() => {
    console.log(ref0.current?.style.rotate, ref0.current?.style.offsetRotate);
  }, [ref0]);

  return (
    <Box position="relative">
      <Box
        ref={ref0}
        px={15}
        rounded="full"
        border="2px solid"
        borderColor="theme.400"
        py={6}
        position="relative"
        w="200px"
        h="200px"
        sx={{
          "@keyframes rotation": {
            from: {
              transform: "rotate(0deg)",
            },
            to: {
              transform: "rotate(359deg)",
            },
          },
        }}
        animation="rotation 10s infinite linear"
      >
        {emojis.map((emoji, i) => (
          <Flex
            ref={refs[i]}
            key={i}
            position="fixed"
            top={`${Math.cos((i * 2 * Math.PI) / 3) * 98 + 82}px`}
            left={`${Math.sin((i * 2 * Math.PI) / 3) * 98 + 82}px`}
            bg="theme.400"
            w="32px"
            h="32px"
            rounded="full"
            justifyContent="center"
            alignItems="center"
            animation="rotation 10s infinite linear reverse"
          >
            {emoji}
          </Flex>
        ))}
      </Box>
      <Image
        src="/images/react.png"
        w="150px"
        position="absolute"
        top="35px"
        left="25px"
      />
    </Box>
  );
}
