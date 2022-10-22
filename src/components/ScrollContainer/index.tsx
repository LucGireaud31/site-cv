import gsap from "gsap";
import { createContext, ReactNode, useRef, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./index.css";

interface ScrollContainerProps {
  children: ReactNode;
  maxH: number | string; // number = px
  defaultAnimationDuration?: number; // ms
  enableScrollX?: boolean;
  enableScrollY?: boolean;
}

interface ScrollContainerContextProps {
  isDisabled: boolean;
  setIsDisabled(d: boolean): void;
  scrollTo: (options: {
    className?: string;
    pt?: number;
    animationDuration?: number;
    top?: number;
  }) => void;
  scrollTop: number;
}
export const ScrollContainerContext = createContext(
  {} as ScrollContainerContextProps
);

export function ScrollContainer(props: ScrollContainerProps) {
  const {
    children,
    maxH,
    defaultAnimationDuration = 700,
    enableScrollX = false,
    enableScrollY = true,
  } = props;

  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);

  const [currentScrollTop, setCurrentScrollTop] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  function scrollTo({
    className,
    pt,
    animationDuration,
    top,
  }: {
    className?: string;
    pt?: number;
    animationDuration?: number;
    top?: number;
  }) {
    if (!className && top == undefined) return;

    const duration = (animationDuration ?? defaultAnimationDuration) / 1000;

    const newY = Math.round(
      className
        ? document.querySelector("." + className)?.getClientRects()[0].y ?? 0
        : top != undefined
        ? top
        : 0 -
          (containerRef?.getBoundingClientRect().y ?? 0) +
          (containerRef?.scrollTop ?? 0)
    );

    if (containerRef) {
      gsap.to(containerRef, {
        scrollTop: newY - (pt ?? 0),
        duration,
      });
    }
  }

  return (
    <ScrollContainerContext.Provider
      value={{
        isDisabled,
        setIsDisabled: (d: boolean) => setIsDisabled(d),
        scrollTo,
        scrollTop: currentScrollTop,
      }}
    >
      <PerfectScrollbar
        style={{
          maxHeight: maxH,
        }}
        options={{
          suppressScrollX: !enableScrollX,
          suppressScrollY: !enableScrollY,
        }}
        containerRef={(ref) => setContainerRef(ref)}
        onScrollY={(e) => {
          setCurrentScrollTop(e.scrollTop);
        }}
      >
        {children}
      </PerfectScrollbar>
    </ScrollContainerContext.Provider>
  );
}
