import gsap from "gsap";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { defaultScrollContextValue } from "./defaultValue";
import { MobileView } from "./MobileView";
import { TScrollContainerContextValue } from "./scrollTypes";
import { limitNumber, pxToNumber } from "./utils";
import { WebView } from "./WebView";

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
  animationDuration?: number; // ms
  isAnimatedOnThumbHover?: boolean;
}

// TODO : documentation ?

const MIN_W_SMARTPHONE = 768;

export const ScrollUtilsContext = createContext<TScrollContainerContextValue>(
  defaultScrollContextValue
);

export const ScrollContainerContext = createContext({
  isDisabled: true,
  setIsDisabled: (d: boolean) => {},
  scrollTo: (className: string, options?: { pt?: number }) => {},
  scrollTop: 0,
});

export function ScrollContainer(props: ScrollContainerProps) {
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
    animationDuration = 700,
    isAnimatedOnThumbHover = true,
  } = props;

  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
  const [trackRef, setTrackRef] = useState<HTMLDivElement | null>(null);
  const [thumbRef, setThumbRef] = useState<HTMLDivElement | null>(null);

  const [dragging, setDragging] = useState<number | null>(null);
  const [isOverTrack, setIsOverTrack] = useState(false);

  const [currentScrollTop, setCurrentScrollTop] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= MIN_W_SMARTPHONE
  );

  const thumbH = useMemo(() => {
    if (thumbHProps) return thumbHProps;

    if (!containerRef || !trackRef) return 0;

    const containerRatio =
      containerRef.clientHeight / containerRef.scrollHeight;

    return trackRef.clientHeight * containerRatio;
  }, [containerRef, trackRef]);

  ////////////////////
  // CLICK ON TRACK //
  ////////////////////

  const isOverThumb = useCallback(
    (newY: number) => {
      return (
        newY >= pxToNumber(thumbRef!.style.top) &&
        newY <= pxToNumber(thumbRef!.style.top) + thumbH
      );
    },
    [thumbRef, thumbH]
  );

  async function onMouseDown(e: MouseEvent) {
    const newY = e.clientY - (containerRef?.getBoundingClientRect().y ?? 0);

    const clientH = containerRef?.clientHeight ?? 0;

    // check if click on track or thumb
    if (isOverThumb(newY)) {
      // Click on thumb

      setDragging(newY - pxToNumber(thumbRef!.style.top));
      return;
    }

    // Click on track
    const topClick = limitNumber(
      newY - thumbH / 2,
      0,
      clientH - thumbH - my * 2
    );

    const ratio = topClick / (clientH - thumbH - my * 2);
    const newTop = ((containerRef?.scrollHeight ?? 0) - clientH) * ratio;

    scrollToTop(newTop, true);
  }

  /////////////
  /// WHEEL ///
  /////////////

  function onWheel(e: WheelEvent) {
    e.stopPropagation();

    scrollToTop((containerRef?.scrollTop ?? 0) + e.deltaY);
  }

  /////////////////////
  /// SCROLL MOBILE ///
  /////////////////////

  function onMobileScroll() {
    setCurrentScrollTop(Math.round(containerRef?.scrollTop ?? 0));
  }

  //////////////////
  /// DRAG & DROP //
  //////////////////

  function onMouseUp() {
    setDragging(null);
  }

  function onMouseMove(e: MouseEvent) {
    const y = e.clientY - (containerRef?.getBoundingClientRect().y ?? 0);

    const clientH = containerRef?.clientHeight ?? 0;

    const newTop = limitNumber(y - dragging!, 0, clientH - thumbH - my * 2);

    const ratio = newTop / (clientH - thumbH - my * 2);

    scrollToTop(((containerRef?.scrollHeight ?? 0) - clientH) * ratio);
  }

  //////////////////
  /// WINDOW SIZE //
  //////////////////

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= MIN_W_SMARTPHONE);
  }

  ////////////////
  /// LISTENERS //
  ////////////////

  useEffect(() => {
    if (isDisabled) return;

    if (dragging) {
      window.addEventListener("mousemove", onMouseMove);
    }

    containerRef?.addEventListener("wheel", onWheel, { passive: true });
    containerRef?.addEventListener("scroll", onMobileScroll, { passive: true });

    trackRef?.addEventListener("mousedown", onMouseDown);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      containerRef?.removeEventListener("wheel", onWheel);
      containerRef?.removeEventListener("scroll", onMobileScroll);
      trackRef?.removeEventListener("mousedown", onMouseDown);
    };
  }, [dragging, thumbH, my, containerRef, isDisabled, animationDuration]);

  useEffect(() => {
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [thumbRef]);

  ///////////
  // UTILS //
  ///////////

  function scrollTo(className: string, options?: { pt?: number }) {
    const el = document.querySelector(className);

    const newY =
      (el?.getClientRects()[0].y ?? 0) -
      (containerRef?.getBoundingClientRect().y ?? 0) +
      (containerRef?.scrollTop ?? 0);

    if (isMobile) {
      containerRef?.scrollTo({
        top: newY - (options?.pt ?? 0),
        behavior: "smooth",
      });

      setCurrentScrollTop(
        limitNumber(
          newY,
          0,
          (containerRef?.scrollHeight ?? 0) - (containerRef?.clientHeight ?? 0)
        )
      );
    } else {
      scrollToTop(newY - (options?.pt ?? 0), true);
    }
  }

  function scrollToTop(newY: number, animate?: boolean) {
    const clientH = containerRef?.clientHeight ?? 0;

    // Container const
    const scrollTop = limitNumber(
      newY,
      0,
      (containerRef?.scrollHeight ?? 0) - clientH
    );

    // Thumb const
    const containerH = containerRef?.scrollHeight ?? 1;
    const ratio = scrollTop / (containerH - clientH);

    const newThumbTop = (clientH - thumbH - my * 2) * ratio;

    // Scroll
    const duration = animate ? animationDuration / 1000 : 0; // s
    setCurrentScrollTop(scrollTop);

    gsap.to(containerRef, {
      scrollTop,
      duration,
    });
    gsap.to(trackRef, {
      top: scrollTop + my,
      duration,
    });
    gsap.to(thumbRef, { top: newThumbTop, duration });
  }

  return (
    <ScrollUtilsContext.Provider
      value={{
        children,
        maxH,
        my,
        pr,
        thumbColor,
        thumbColorSelected,
        thumbH,
        thumbStyle,
        thumbW,
        thumbWSelected,
        trackStyle,
        trackW,
        isDisabled,
        trackRef,
        thumbRef,
        dragging,
        isAnimatedOnThumbHover,
        setContainerRef,
        setTrackRef,
        setIsOverTrack,
        setThumbRef,
        isOverTrack,
      }}
    >
      <ScrollContainerContext.Provider
        value={{
          isDisabled,
          setIsDisabled: (d: boolean) => setIsDisabled(d),
          scrollTo,
          scrollTop: currentScrollTop,
        }}
      >
        {isMobile ? <MobileView /> : <WebView />}
      </ScrollContainerContext.Provider>
    </ScrollUtilsContext.Provider>
  );
}
