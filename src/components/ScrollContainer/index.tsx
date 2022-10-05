import gsap from "gsap";
import { createContext, ReactNode, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./index.css";

interface ScrollContainerProps {
  children: ReactNode;
  maxH: number | string; // number = px
  animationDuration?: number; // ms
}

export const ScrollContainerContext = createContext({
  isDisabled: true,
  setIsDisabled: (d: boolean) => {},
  scrollTo: (
    className: string,
    options?: { pt?: number; animationDuration?: number }
  ) => {},
  scrollTop: 0,
});

export function ScrollContainer(props: ScrollContainerProps) {
  const { children, maxH, animationDuration = 700 } = props;

  // const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);

  const [currentScrollTop, setCurrentScrollTop] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  function scrollTo(
    className: string,
    options?: { pt?: number; animationDuration?: number /*ms*/ }
  ) {
    const duration = (options?.animationDuration ?? animationDuration) / 1000;

    const el = document.querySelector(className);

    const newY = Math.round(
      (el?.getClientRects()[0].y ?? 0) -
        (containerRef?.getBoundingClientRect().y ?? 0) +
        (containerRef?.scrollTop ?? 0)
    );

    gsap.to(containerRef, {
      scrollTop: newY - (options?.pt ?? 0),
      duration,
    });
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
