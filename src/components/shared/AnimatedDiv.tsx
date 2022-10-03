import { CSSProperties, ReactNode, useEffect, useState } from "react";
import { sleep } from "../../utils/promise";

interface AnimatedDivProps {
  children: ReactNode;
  isActive: boolean;
  animationActive: string;
  animationInactive?: string;
  onAnimationEnd?(): void;
  onAnimationBegin?(): void;
  animationDuration?: number; // ms
  doAnimation?: boolean; // active or not animation
  style?: CSSProperties;
}

export function AnimatedDiv(props: AnimatedDivProps) {
  const {
    children,
    isActive,
    animationActive,
    animationInactive = animationActive,
    doAnimation = true,
    onAnimationEnd,
    onAnimationBegin,
    animationDuration: animationDurationProps,
    style,
  } = props;

  const animationDuration = doAnimation ? animationDurationProps ?? 0 : 0;

  const [display, setDisplay] = useState(true);

  useEffect(() => {
    (async () => {
      if (!isActive) {
        await sleep(animationDuration);
        onAnimationEnd?.();
        setDisplay(false);
        return;
      }
      onAnimationBegin?.();
      setDisplay(true);
    })();
  }, [isActive, animationDuration]);

  return (
    <div
      className={`animate__animated ${
        isActive ? animationActive : animationInactive
      }`}
      style={{
        display: display ? "block" : "none",
        animationDuration: `${animationDuration}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
