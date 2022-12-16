import { Box, Flex } from "@chakra-ui/react";
import { useReducer, useState } from "react";
import { AnimatedScreen } from "./AnimatedScreen";
import { ArrowContainer } from "./ArrowContainer";

interface ServicesProps {}

const INDEX_MIN = 0;
const INDEX_MAX = 1;

export function Services(props: ServicesProps) {
  const {} = props;

  function reducer(state: number, action: "increment" | "decrement") {
    if (action == "increment") {
      return state == INDEX_MAX ? INDEX_MIN : state + 1;
    }
    return state == INDEX_MIN ? INDEX_MAX : state - 1;
  }

  const [isInitial, setIsInitial] = useState(true);

  const [index, setIndex] = useReducer(reducer, INDEX_MIN);
  const [isChanging, setIsChanging] = useState(false);

  return (
    <Box id="services" position="relative" pb="50px" overflow="hidden">
      <Flex h="100vh" zIndex={1}>
        <AnimatedScreen
          isActive={index == 0}
          doAnimation={!isInitial}
          theme="orange"
          themeLight="orangeBall"
          onAnimationBegin={() => {
            setIsChanging(true);
          }}
          onAnimationEnd={() => {
            setIsChanging(false);
          }}
          type="web"
        />
        <AnimatedScreen
          isActive={index == 1}
          doAnimation={!isInitial}
          theme="yellow"
          themeLight="yellowBall"
          onAnimationBegin={() => {
            setIsChanging(true);
          }}
          onAnimationEnd={() => {
            setIsChanging(false);
          }}
          type="mobile"
        />

        <ArrowContainer
          onChange={(type) => {
            setIsInitial(false);
            setIndex(type);
          }}
          isDisabled={isChanging}
        />
      </Flex>
    </Box>
  );
}
