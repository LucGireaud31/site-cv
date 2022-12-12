import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
  color?: string;
}

export function Highlight(props: HighlightProps) {
  const { children, color } = props;

  return (
    <Text as="span" {...(color ? { color } : { fontWeight: "bold" })}>
      {children}
    </Text>
  );
}
