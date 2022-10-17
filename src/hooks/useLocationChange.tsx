import { useLayoutEffect } from "react";
import { useScrollContainerContext } from "../components/ScrollContainer/useScrollContainerContext";

interface PropsUseLocationChange {
  cb?(): void;
  disableScrollTop?: boolean;
}

export function useLocationChange(props?: PropsUseLocationChange) {
  const { scrollTo } = useScrollContainerContext();

  useLayoutEffect(() => {
    if (!props?.disableScrollTop) {
      scrollTo({ top: 0, animationDuration: 0 });
    }
    props?.cb?.();
  }, [location.pathname]);
}
