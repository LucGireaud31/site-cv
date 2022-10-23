import { Box } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { CSSProperties, ReactNode } from "react";
import { ScrollCard, ScrollCardProps } from "./ScrollCard";

interface CanvasScrollCardProps extends Omit<ScrollCardProps, "endTop"> {
  beginTop: number;
  duration: number;
  style?: CSSProperties;
  children: ReactNode;
}

export function CanvasScrollCard(props: CanvasScrollCardProps) {
  const { beginTop, duration, style, offset, children, ...rest } = props;

  return (
    <div
      style={{
        height: `calc(${duration}px + 100vh)`,
        position: "relative",
        ...style,
      }}
    >
      <Box boxSize="full" top={0} position="absolute" zIndex={1}>
        <Box position="sticky" top="98px" h="calc(100vh - 98px)">
          {children}
        </Box>
      </Box>

      <Canvas
        style={{
          height: `100vh`,
          width: `100vw`,
          position: "sticky",
          top: 0,
        }}
        // performance={{ min: 0.2, max: 1, debounce: 500 }}
      >
        <ScrollCard
          beginTop={beginTop}
          endTop={beginTop + duration}
          offset={offset}
          {...rest}
        />
      </Canvas>
    </div>
  );
}
