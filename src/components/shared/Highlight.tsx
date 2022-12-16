import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
  color?: string | true;
}

export function Highlight(props: HighlightProps) {
  const { children, color } = props;

  return (
    <Text
      as="span"
      {...(color != undefined
        ? { color: color == true ? "theme.100" : color }
        : { fontWeight: "bold" })}
    >
      {children}
    </Text>
  );
}
