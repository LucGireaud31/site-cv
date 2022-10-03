import { Flex } from "@chakra-ui/react";
import { useReducer, useState } from "react";
import { ArrowContainer } from "./ArrowContainer";
import { Mobile } from "./Mobile";
import { Web } from "./Web";

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

  const [index, setIndex] = useReducer(reducer, INDEX_MIN);

  return (
    <Flex
      id="solutions"
      h="calc(100vh - 66px)"
      bg="white"
      pb="66px"
      position="relative"
    >
      {index == 0 && <Web />}
      {index == 1 && <Mobile />}
      <ArrowContainer onChange={setIndex} />
    </Flex>
  );
}
