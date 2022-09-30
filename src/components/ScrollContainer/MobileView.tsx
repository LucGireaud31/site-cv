import { ScrollContainerContext, ScrollUtilsContext } from ".";
import { useContext } from "react";
import { numberToPx } from "./utils";

interface MobileViewProps {}

export function MobileView(props: MobileViewProps) {
  const {} = props;

  const { children, maxH, isDisabled, setContainerRef } =
    useContext(ScrollUtilsContext);

  return (
    <div
      ref={(newRef) => setContainerRef(newRef)}
      style={{
        maxHeight: typeof maxH == "number" ? numberToPx(maxH) : maxH,
        overflowY: isDisabled ? "hidden" : "auto",
      }}
    >
      {children}
    </div>
  );
}
