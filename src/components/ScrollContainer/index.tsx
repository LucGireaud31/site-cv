import { createContext, memo, ReactNode, useMemo, useState } from "react";
import { useListeners } from "./useListeners";
import { numberToPx } from "./utils";

interface ScrollContainerProps {
  children: ReactNode;
  trackStyle?: any;
  thumbStyle?: any;
  trackW?: number;
  thumbW?: string; // Percent
  thumbWSelected?: string; // Percent
  pr?: number;
  my?: number;
  thumbColor?: string;
  thumbColorSelected?: string;
  thumbH?: number;
  maxH: number | string; // number = px
}

// TODO : documentation ?

const MIN_W_SMARTPHONE = 768;

export const ScrollContainerContext = createContext({
  isDisabled: true,
  setIsDisabled: (d: boolean) => {},
});

export function ScrollContainerMemo(props: ScrollContainerProps) {
  const {
    children,
    trackStyle,
    thumbStyle,
    trackW = 10,
    thumbW = "50%",
    thumbWSelected = "80%",
    pr = 3,
    my = 3,
    thumbColor = "#626262",
    thumbColorSelected = "#626262b3",
    thumbH: thumbHProps,
    maxH,
  } = props;

  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
  const [trackRef, setTrackRef] = useState<HTMLDivElement | null>(null);
  const [thumbRef, setThumbRef] = useState<HTMLDivElement | null>(null);

  const [dragging, setDragging] = useState<number | null>(null);
  const [isOverTrack, setIsOverTrack] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= MIN_W_SMARTPHONE
  );
  const [isDisabled, setIsDisabled] = useState(false);

  const thumbH = useMemo(() => {
    if (thumbHProps) return thumbHProps;

    if (!containerRef || !trackRef) return 0;

    const containerRatio =
      containerRef.clientHeight / containerRef.scrollHeight;

    return trackRef.clientHeight * containerRatio;
  }, [containerRef, trackRef]);

  // TODO : Have to calculate compared to the children

  useListeners({
    containerRef,
    dragging,
    setDragging,
    setIsMobile,
    thumbH,
    thumbRef,
    trackRef,
    my,
    MIN_W_SMARTPHONE,
    isDisabled,
  });

  if (isMobile)
    return (
      <div
        style={{
          maxHeight: typeof maxH == "number" ? numberToPx(maxH) : maxH,
          overflowY: "auto",
        }}
      >
        {children}
      </div>
    );

  return (
    <ScrollContainerContext.Provider
      value={{
        isDisabled,
        setIsDisabled: (d: boolean) => setIsDisabled(d),
      }}
    >
      <div
        ref={(newRef) => {
          setContainerRef(newRef);
        }}
        style={{
          position: "relative",
          maxHeight: typeof maxH == "number" ? numberToPx(maxH) : maxH,
          overflowY: "hidden",
          userSelect: dragging ? "none" : "auto",
        }}
      >
        {children}
        {/* //Track */}
        <div
          ref={(newRef) => {
            setTrackRef(newRef);
          }}
          onDragStart={(e) => e.preventDefault()}
          onMouseEnter={() => {
            setIsOverTrack(true);
          }}
          onMouseLeave={() => {
            setIsOverTrack(false);
          }}
          style={{
            position: "absolute",
            top: my,
            right: 0,
            width: numberToPx(trackW),
            height: `calc(100% - ${my * 2}px)`,
            zIndex: 99,
            ...trackStyle,
          }}
        >
          {/* //Thumb */}
          <div
            ref={(newRef) => setThumbRef(newRef)}
            onDragStart={(e) => e.preventDefault()}
            style={{
              position: "absolute",
              right: numberToPx(pr),
              top: "0px",
              background: dragging ? thumbColor : thumbColorSelected,
              height: numberToPx(thumbH),
              width: isOverTrack || dragging ? thumbWSelected : thumbW,
              borderRadius: numberToPx(trackW),
              transition: "width 0.3s",
              display: isDisabled ? "none" : "block",
              ...thumbStyle,
            }}
          />
        </div>
      </div>
    </ScrollContainerContext.Provider>
  );
}

export const ScrollContainer = memo(ScrollContainerMemo, (prev, next) => {
  return (
    JSON.stringify(prev.trackStyle) == JSON.stringify(next.trackStyle) &&
    JSON.stringify(prev.thumbStyle) == JSON.stringify(next.thumbStyle) &&
    prev.trackW == next.trackW &&
    prev.thumbW == next.thumbW &&
    prev.thumbWSelected == next.thumbWSelected &&
    prev.pr == next.pr &&
    prev.my == next.my &&
    prev.thumbColor == next.thumbColor &&
    prev.thumbColorSelected == next.thumbColorSelected &&
    prev.thumbH == next.thumbH &&
    prev.maxH == next.maxH
  );
});
