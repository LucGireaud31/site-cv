import { Box, Flex } from "@chakra-ui/react";
import { useReducer } from "react";
import { ArrowContainer } from "./ArrowContainer";
import { Mobile } from "./Mobile";
import { MobileBackground } from "./MobileBackground";
import { Web } from "./Web";
import { WebBackground } from "./WebBackground";

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
    <Box position="relative" pb="66px">
      <Flex id="solutions" h="calc(100vh - 66px)" zIndex={1}>
        {index == 0 && (
          <>
            <Web />
            <WebBackground />
          </>
        )}
        {index == 1 && (
          <>
            <Mobile />
            <MobileBackground />
          </>
        )}
        <ArrowContainer onChange={setIndex} />
      </Flex>
    </Box>
  );
}
