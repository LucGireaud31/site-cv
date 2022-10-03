import { useContext } from "react";
import { ScrollUtilsContext } from ".";
import { numberToPx } from "./utils";

export function WebView() {
  const {
    children,
    maxH,
    isDisabled,
    setContainerRef,
    dragging,
    setTrackRef,
    setIsOverTrack,
    my,
    trackW,
    trackStyle,
    setThumbRef,
    thumbColor,
    thumbColorSelected,
    pr,
    thumbH,
    isOverTrack,
    thumbWSelected,
    thumbW,
    thumbStyle,
    isAnimatedOnThumbHover,
  } = useContext(ScrollUtilsContext);

  return (
    <div
      ref={(newRef) => {
        setContainerRef(newRef);
      }}
      style={{
        position: "relative",
        maxHeight: typeof maxH == "number" ? numberToPx(maxH) : maxH,
        overflow: "hidden",
        userSelect: dragging ? "none" : "auto",
      }}
    >
      {children}
      {/* //Track */}
      <div
        ref={(newRef) => {
          setTrackRef(newRef);
          500;
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
          cursor: "pointer",
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
            display: isDisabled ? "none" : "block",
            ...(isAnimatedOnThumbHover && {
              transition: "width 200ms",
            }),
            ...thumbStyle,
          }}
        />
      </div>
    </div>
  );
}
