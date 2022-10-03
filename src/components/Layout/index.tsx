import { Box } from "@chakra-ui/react";
import { useEffect, useReducer, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { limitNumber } from "../../utils/number";
import { Header } from "./Header";
import gsap from "gsap";
import { sleep } from "../../utils/promise";

const routesWithoutScroll = ["/"];

const SECTION_LENGTH = 3;
const SCROLL_DURATION = 0.8;
const NB_WHEEL_TO_SCROLL = 4;

export function Layout() {
  const location = useLocation();

  const containerRef = useRef<HTMLDivElement>(null);

  const [wheelWeight, setWheelWeight] = useState(0);

  function reducer(state: number, action: "increment" | "decrement") {
    return limitNumber(
      action == "increment" ? state + 1 : state - 1,
      0,
      SECTION_LENGTH - 1
    );
  }

  const [currentSection, setCurrentSection] = useReducer(reducer, 0);

  useEffect(() => {
    (async () => {
      gsap.to(containerRef?.current, {
        scrollTop: (window.innerHeight - 67) * currentSection,
        duration: SCROLL_DURATION,
      });

      sleep(SCROLL_DURATION * 1000).then(() => setWheelWeight(0));
    })();
  }, [currentSection, containerRef]);

  useEffect(() => {
    let wheelWeightTemp = wheelWeight;

    function onWheel(e: WheelEvent) {
      const direction = e.deltaY;

      if (direction < 0) {
        setWheelWeight((w) => w - 1);
        wheelWeightTemp--;
        if (wheelWeightTemp != -1 * NB_WHEEL_TO_SCROLL) return;
        setCurrentSection("decrement");
        return;
      }

      setWheelWeight((w) => w + 1);
      wheelWeightTemp++;

      if (wheelWeightTemp != NB_WHEEL_TO_SCROLL) return;
      setCurrentSection("increment");
    }

    window.addEventListener("wheel", onWheel);

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, [wheelWeight]);

  return (
    <Box
      ref={containerRef}
      color="theme.500"
      id="header"
      position="relative"
      bg="background"
      {...(routesWithoutScroll.includes(location.pathname) && {
        maxH: "100vh",
        overflow: "hidden",
      })}
    >
      {/* <Background /> */}

      <Header />

      <Box zIndex={100}>
        <Outlet />
      </Box>
    </Box>
  );
}
