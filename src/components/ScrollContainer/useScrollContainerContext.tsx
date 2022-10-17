import { useContext } from "react";
import { ScrollContainerContext } from ".";

export function useScrollContainerContext() {
  return useContext(ScrollContainerContext);
}
