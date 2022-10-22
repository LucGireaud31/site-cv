import { Canvas } from "@react-three/fiber";
import { CSSProperties } from "react";
import { ScrollCard, ScrollCardProps } from "./ScrollCard";

interface CanvasScrollCardProps extends Omit<ScrollCardProps, "endTop"> {
  inactivityH: number;
  beginTop: number;
  duration: number;
  style?: CSSProperties;
}

export function CanvasScrollCard(props: CanvasScrollCardProps) {
  const { inactivityH, beginTop, duration, style, ...rest } = props;

  const clientH = document.documentElement.clientHeight;
  const clientW = document.documentElement.clientWidth;

  return (
    <div
      style={{ height: `${duration + inactivityH * 2 + clientH}px`, ...style }}
    >
      <Canvas
        style={{
          height: `${clientH}px`,
          width: `${clientW}px`,
          position: "sticky",
          top: `calc(50% - ${clientH / 2}px)`,
        }}
        performance={{ min: 0.2, max: 1, debounce: 500 }}
      >
        <ScrollCard
          beginTop={beginTop + inactivityH}
          endTop={beginTop + duration + inactivityH}
          {...rest}
        />
      </Canvas>
    </div>
  );
}
