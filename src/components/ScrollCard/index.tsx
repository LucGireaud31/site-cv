import { Canvas } from "@react-three/fiber";
import { memo, useMemo } from "react";
import { ScrollCard, ScrollCardProps } from "./ScrollCard";

interface CanvasScrollCardProps
  extends Omit<ScrollCardProps, "beginHeight" | "endHeight"> {
  inactivityH: number;
  parentH: number;
  offset: number;
  canvasH: number;
}

function CanvasScrollCardMemo(props: CanvasScrollCardProps) {
  const { inactivityH, canvasH, offset, parentH, ...rest } = props;

  const beginHeight = useMemo(
    () => offset - (window.innerHeight - canvasH) / 2,
    [offset, canvasH]
  ); // Height of the div(s) above of my parent - canvasH/2

  return (
    <Canvas
      style={{
        height: `${canvasH}px`,
        position: "sticky",
        top: `calc(50% - ${canvasH / 2}px)`,
      }}
    >
      <Card
        beginHeight={beginHeight + inactivityH}
        endHeight={beginHeight + parentH - canvasH - inactivityH}
        {...rest}
      />
      ;
    </Canvas>
  );
}

export const CanvasScrollCard = memo(CanvasScrollCardMemo, (prev, next) => {
  return (
    prev.inactivityH == next.inactivityH &&
    prev.parentH == next.parentH &&
    prev.offset == next.offset &&
    prev.canvasH == next.canvasH &&
    prev.imgSrc == next.imgSrc &&
    prev.imgSrc2 == next.imgSrc2 &&
    prev.zoom == next.zoom &&
    prev.maxRotation == next.maxRotation &&
    prev.mesh?.color == next.mesh?.color &&
    prev.mesh?.w == next.mesh?.w &&
    prev.mesh?.h == next.mesh?.h &&
    prev.mesh?.d == next.mesh?.d &&
    prev.mesh?.rounded == next.mesh?.rounded &&
    prev.mesh?.lightening == next.mesh?.lightening &&
    prev.bgColor == next.bgColor
  );
});
