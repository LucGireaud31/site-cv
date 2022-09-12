import {
  Box,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Card } from "./Card";

export function Card3D() {
  const ref1 = useRef<HTMLCanvasElement>(null);
  const ref2 = useRef<HTMLCanvasElement>(null);

  const card1 = { width: 14, height: 7 };
  const card2 = { width: 10, height: 7 };

  const [selectedImage, setSelectedImage] = useState<null | string>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position="absolute" w="90%" h="100vh" mt="150px">
      <Box w="100%" h="100%" position="relative">
        <Canvas
          ref={ref1}
          style={{
            width: "60%",
            height: "800px",
            left: "00px",
            top: "270px",
            position: "absolute",
          }}
        >
          <Card
            canvasRef={ref1}
            index={1}
            imgSrc="/3d/apsio_coin.hdr"
            width={card1.width}
            height={card1.height}
            onClick={() => {
              setSelectedImage("images/apsio_coin.png");
              onOpen();
            }}
          />
          ;
        </Canvas>
        <Canvas
          ref={ref2}
          style={{
            width: "900px",
            height: "1100px",
            right: "-100px",
            top: "-350px",
            position: "absolute",
          }}
        >
          <Card
            canvasRef={ref2}
            index={2}
            imgSrc="/3d/apsio-ssi.hdr"
            width={card2.width}
            height={card2.height}
            onClick={() => {
              setSelectedImage("images/apsio-ssi.png");
              onOpen();
            }}
          />
          ;
        </Canvas>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="6xl">
        <ModalOverlay />
        <ModalContent rounded="3xl">
          {selectedImage && (
            <Image src={selectedImage} rounded="3xl" onClick={onClose} />
          )}
        </ModalContent>
      </Modal>
    </Box>
  );
}
