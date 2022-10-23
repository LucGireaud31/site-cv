import { Box } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useScrollContainerContext } from "../ScrollContainer/useScrollContainerContext";

interface LinkItemProps {
  label: string;
  href: string;
}

export function LinkItem(props: LinkItemProps) {
  const { label, href } = props;

  const location = useLocation();

  const { scrollTo } = useScrollContainerContext();

  const selected = location.pathname == href;

  return (
    <Box fontWeight={selected ? "bold" : "normal"}>
      <Link
        to={href}
        onClick={() => {
          selected && scrollTo({ top: 0 });
        }}
      >
        {label}
      </Link>
    </Box>
  );
}
