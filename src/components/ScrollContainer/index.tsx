import gsap from "gsap";
import { createContext, ReactNode, useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./index.css";

interface ScrollContainerProps {
  children: ReactNode;
  maxH: number | string; // number = px
  defaultAnimationDuration?: number; // ms
  enableScrollX?: boolean;
  enableScrollY?: boolean;
  id?: string;
}

interface ScrollContainerContextProps {
  isDisabled: boolean;
  setIsDisabled(d: boolean): void;
  scrollTo: (options: {
    selector?: string;
    pt?: number;
    animationDuration?: number;
    top?: number;
  }) => void;
  scrollTop: number;
  scrollContainerRef: HTMLElement | null;
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
    id,
  } = props;

  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);

  const [currentScrollTop, setCurrentScrollTop] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  function scrollTo({
    selector,
    pt,
    animationDuration,
    top,
  }: {
    selector?: string;
    pt?: number;
    animationDuration?: number;
    top?: number;
  }) {
    if (!selector && top == undefined) return;

    const duration = (animationDuration ?? defaultAnimationDuration) / 1000;

    const newY = Math.round(
      selector
        ? (containerRef?.querySelector(selector) as HTMLElement).offsetTop ?? 0
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

  useEffect(() => {
    function onScroll(e: any) {
      setCurrentScrollTop(e.target.scrollTop);
    }
    console.log("oui");
    containerRef?.addEventListener("scroll", onScroll);
    return () => {
      containerRef?.removeEventListener("scroll", onScroll);
    };
  }, [containerRef]);

  return (
    <ScrollContainerContext.Provider
      value={{
        isDisabled,
        setIsDisabled: (d: boolean) => setIsDisabled(d),
        scrollTo,
        scrollTop: currentScrollTop,
        scrollContainerRef: containerRef,
      }}
    >
      <div
        id={id}
        style={{
          maxHeight: maxH,
          overflowY: enableScrollY ? "auto" : "hidden",
          overflowX: enableScrollX ? "auto" : "hidden",
        }}
        ref={(ref) => setContainerRef(ref)}
      >
        {children}
      </div>
      {/* <PerfectScrollbar
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
      </PerfectScrollbar> */}
    </ScrollContainerContext.Provider>
  );
}
