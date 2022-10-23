import { useLocation } from "react-router-dom";
import { useScrollContainerContext } from "../components/ScrollContainer/useScrollContainerContext";

const NAMES = [["Bienvenue", "Mes services", "A propos"], ["Mes projets"]];

export function useHeaderName() {
  const { scrollTop } = useScrollContainerContext();

  const clientH = document.documentElement.clientHeight;

  const { pathname } = useLocation();

  if (pathname == "/") {
    if (scrollTop < clientH * 0.9) {
      return NAMES[0][0];
    }
    if (scrollTop < clientH * 1.9) {
      return NAMES[0][1];
    }
    return NAMES[0][2];
  }
  return NAMES[1][0];
}
