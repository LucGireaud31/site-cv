import { TScrollContainerContextValue } from "./scrollTypes";

export const defaultScrollContextValue: TScrollContainerContextValue = {
  children: null,
  maxH: "100vh",
  thumbW: "100%",
  thumbColor: "none",
  thumbWSelected: "none",
  thumbColorSelected: "none",
  my: 0,
  pr: 0,
  thumbH: 0,
  trackW: 0,
  thumbStyle: {},
  trackStyle: {},
  trackRef: null,
  thumbRef: null,
  dragging: null,
  isOverTrack: false,
  isDisabled: false,
  isAnimatedOnThumbHover: true,
  setTrackRef: (r: HTMLDivElement | null) => { },
  setThumbRef: (r: HTMLDivElement | null) => { },
  setContainerRef: (r: HTMLDivElement | null) => { },
  setIsOverTrack: (o: boolean) => { },
};