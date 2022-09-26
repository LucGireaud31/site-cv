import { useCallback, useEffect } from "react";
import { limitNumber, numberToPx, pxToNumber } from "./utils";

interface TuseListenersProps {
  containerRef: HTMLDivElement | null;
  trackRef: HTMLDivElement | null;
  thumbRef: HTMLDivElement | null;
  thumbH: number;
  dragging: number | null;
  setDragging(d: number | null): void;
  setIsMobile(b: boolean): void;
  my: number;
  MIN_W_SMARTPHONE: number;
  isDisabled: boolean;
}

export function useListeners({
  containerRef,
  thumbRef,
  trackRef,
  thumbH,
  dragging,
  setDragging,
  setIsMobile,
  my,
  MIN_W_SMARTPHONE,
  isDisabled,
}: TuseListenersProps) {
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

  function onMouseDown(e: MouseEvent) {
    const newY = e.clientY - (containerRef?.getBoundingClientRect().y ?? 0);

    const clientH = containerRef?.clientHeight ?? 0;

    // check if click on track or thumb
    if (isOverThumb(newY)) {
      // Click on thumb

      setDragging(newY - pxToNumber(thumbRef!.style.top));
      return;
    }

    // Click on track
    const newTop = limitNumber(newY - thumbH / 2, 0, clientH - thumbH - my * 2);

    thumbRef!.style.top = numberToPx(newTop);

    const ratio = newTop / (clientH - thumbH - my * 2);

    const newOffset = ((containerRef?.scrollHeight ?? 0) - clientH) * ratio;

    containerRef?.scrollTo({
      top: newOffset,
    });
    const realOffset = containerRef?.scrollTop ?? 0;

    // Move track top
    trackRef!.style.top = numberToPx(realOffset + my);
  }

  ////////////
  /// WHEEL //
  ////////////

  function onWheel(e: WheelEvent) {
    e.stopPropagation();

    const clientH = containerRef?.clientHeight ?? 0;

    const newOffset = limitNumber(
      (containerRef?.scrollTop ?? 0) + e.deltaY,
      0,
      (containerRef?.scrollHeight ?? 0) - clientH
    );

    containerRef?.scrollTo({
      top: newOffset,
    });
    const realOffset = containerRef?.scrollTop ?? 0;

    // Move track top
    trackRef!.style.top = numberToPx(realOffset + my);

    // Move thumb
    const containerH = containerRef?.scrollHeight ?? 1;
    const ratio = realOffset / (containerH - clientH);

    const newTop = (clientH - thumbH - my * 2) * ratio;

    thumbRef!.style.top = numberToPx(newTop);
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

    // Move thumb
    thumbRef!.style.top = numberToPx(newTop);

    // Move container
    containerRef?.scrollTo({
      top: ((containerRef?.scrollHeight ?? 0) - clientH) * ratio,
    });
    const realOffset = containerRef?.scrollTop ?? 0;

    // Move track top
    trackRef!.style.top = numberToPx(realOffset + my);
  }

  //////////////////
  /// WINDOW SIZE //
  //////////////////

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= MIN_W_SMARTPHONE);
  }

  //////////////////
  /// USE EFFECTS //
  //////////////////

  useEffect(() => {
    if (isDisabled) return;

    if (dragging) {
      window.addEventListener("mousemove", onMouseMove);
    }
    containerRef?.addEventListener("wheel", onWheel, { passive: true });
    trackRef?.addEventListener("mousedown", onMouseDown);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      containerRef?.removeEventListener("wheel", onWheel);
      trackRef?.removeEventListener("mousedown", onMouseDown);
    };
  }, [dragging, thumbH, my, containerRef, isDisabled]);

  useEffect(() => {
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
}
