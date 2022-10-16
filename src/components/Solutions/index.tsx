import { Box, Flex } from "@chakra-ui/react";
import { useReducer, useState } from "react";
import { AnimatedScreen } from "./AnimatedScreen";
import { ArrowContainer } from "./ArrowContainer";

interface SolutionsProps {}

const INDEX_MIN = 0;
const INDEX_MAX = 1;

export function Solutions(props: SolutionsProps) {
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
    <Box
      id="solutions"
      position="relative"
      pb="66px"
      overflow="hidden"
      bg="theme.500"
    >
      <Flex id="solutions" h="100vh" zIndex={1}>
        <AnimatedScreen
          isActive={index == 0}
          doAnimation={!isInitial}
          bg="orange.500"
          title="Sites Webs"
          onAnimationBegin={() => {
            setIsChanging(true);
          }}
          onAnimationEnd={() => {
            setIsChanging(false);
          }}
        />
        <AnimatedScreen
          isActive={index == 1}
          doAnimation={!isInitial}
          bg="yellow.500"
          title="Applications mobiles"
          onAnimationBegin={() => {
            setIsChanging(true);
          }}
          onAnimationEnd={() => {
            setIsChanging(false);
          }}
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
