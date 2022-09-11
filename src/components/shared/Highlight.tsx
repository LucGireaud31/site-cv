import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
}

export function Highlight(props: HighlightProps) {
  const { children } = props;

  return (
    <Text as="span" color="theme.500">
      {children}
    </Text>
  );
}
