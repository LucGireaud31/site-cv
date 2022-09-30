import { ReactNode } from "react";

export type TScrollContainerContextValue = {
  children: ReactNode;
  maxH: number | string;
  thumbW: string;
  thumbColor: string;
  thumbWSelected: string;
  thumbColorSelected: string;
  my: number;
  pr: number;
  thumbH: number;
  trackW: number;
  thumbStyle: any;
  trackStyle: any;
  trackRef: HTMLDivElement | null;
  thumbRef: HTMLDivElement | null;
  dragging: number | null;
  isOverTrack: boolean;
  isDisabled: boolean;
  isAnimatedOnThumbHover: boolean;
  setTrackRef(r: HTMLDivElement | null): void;
  setThumbRef(r: HTMLDivElement | null): void;
  setContainerRef(r: HTMLDivElement | null): void;
  setIsOverTrack(o: boolean): void;
};
