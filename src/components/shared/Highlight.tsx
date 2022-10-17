import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
  type?: "color" | "bold";
}

export function Highlight(props: HighlightProps) {
  const { children, type = "color" } = props;

  return (
    <Text
      as="span"
      ml={1}
      {...(type == "color" ? { color: "theme.500" } : { fontWeight: "bold" })}
    >
      {children}
    </Text>
  );
}
