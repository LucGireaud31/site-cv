import { Box, BoxProps, Text } from "@chakra-ui/react";
import { ReactNode, useEffect, WheelEvent, useState } from "react";
import Draggable from "react-draggable";

interface ContainerScrollProps extends BoxProps {
  children: ReactNode;
}
const SIZE = 5;
const RIGHT = 5;
const ROUNDED = "full";
const COLOR = "black";
const OPACITY = 0.2;
const MY = 5;

export function ContainerScroll(props: ContainerScrollProps) {
  const { children, maxH, ...rest } = props;

  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [ref2, setRef2] = useState<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [beginDrag, setBeginDrag] = useState<null | number>(null);
  const [mouseIn, setMouseIn] = useState(false);

  const totalH = ref?.scrollHeight ?? 1;
  const clientH = ref?.clientHeight ?? 0;
  const ratioScrollSize = clientH / totalH;

  const scrollH = ratioScrollSize * clientH;
  const scrollMax = totalH - scrollH - MY * 2;

  const topMin = 0;
  const topMax = totalH - clientH;

  function onWheel(e: WheelEvent<HTMLDivElement>) {
    const currentTop = ref?.scrollTop ?? 0;
    const delta = e.deltaY;

    const newTop = Math.min(Math.max(currentTop + delta, topMin), topMax);

    ref?.scrollTo({
      top: newTop,
    });

    const scrollRatio = Math.min(Math.max(newTop / topMax, 0), 1);

    const scrollTop = scrollRatio * scrollMax;
    console.log(newTop, topMax, scrollRatio);
    ref2!.style.top = `${scrollTop}px`;
  }

  useEffect(() => {
    function onMouseUp() {
      setIsDragging(false);
      setBeginDrag(null);
    }

    function onDrag(e: MouseEvent) {
      if (!isDragging) return;
      // Remove user select
      if (window.getSelection) {
        if (window.getSelection()?.empty) {
          // Chrome
          window.getSelection()?.empty();
        } else if (window.getSelection()?.removeAllRanges) {
          // Firefox
          window.getSelection()?.removeAllRanges();
        }
      } else if ((document as any).selection) {
        // IE?
        (document as any).selection.empty();
      }
      //   ref2!.style.top = `${e.clientY}px`;
    }

    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onDrag);

    return () => {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onDrag);
    };
  }, [isDragging, beginDrag]);

  return (
    <Box
      ref={(newRef) => setRef(newRef)}
      maxH={maxH}
      overflow="hidden"
      position="relative"
      onWheel={onWheel}
      {...rest}
    >
      {children}
      {/* // Gutter */}
      <Box
        position="absolute"
        w="12px"
        // bg="red"
        h={`${totalH - MY * 2}px`}
        top={`${MY}px`}
        right={0}
        onMouseEnter={() => {
          setMouseIn(true);
        }}
        onMouseLeave={() => {
          setMouseIn(false);
        }}
      >
        <Draggable
          axis="y"
          bounds="parent"
          onStart={() => {
            setIsDragging(true);
          }}
          onStop={() => {
            setIsDragging(false);
          }}
          onDrag={(e, data) => {
            const dragY = data.y;

            const scrollRatio = dragY / scrollMax;

            const newTop = topMax * scrollRatio;
            console.log(newTop, dragY);
            ref?.scrollTo({ top: newTop });
          }}
        >
          <Box
            ref={(newRef) => setRef2(newRef)}
            position="absolute"
            top={`${0}px`}
            right={`${RIGHT}px`}
            bg={COLOR}
            rounded={ROUNDED}
            w={`${(isDragging || mouseIn ? 2 : 1) * SIZE}px`}
            opacity={OPACITY * (isDragging ? 2 : 1)}
            h={scrollH}
            zIndex={99999}
          />
        </Draggable>
      </Box>
    </Box>
  );
}
