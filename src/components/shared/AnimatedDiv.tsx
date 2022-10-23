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
  offsetBegin?: number; // offset before start animation
  offsetEnd?: number; // offset before end animation
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
    offsetBegin = 0,
    offsetEnd = 0,
    animationDuration: animationDurationProps = 600,
    style,
  } = props;

  const animationDuration = doAnimation ? animationDurationProps : 0;

  const [display, setDisplay] = useState(isActive);

  useEffect(() => {
    (async () => {
      if (!isActive) {
        await sleep(animationDuration + offsetEnd);
        onAnimationEnd?.();
        setDisplay(false);
        return;
      }
      await sleep(offsetBegin);
      onAnimationBegin?.();
      setDisplay(true);
    })();
  }, [isActive, animationDuration, offsetBegin, offsetEnd]);

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
