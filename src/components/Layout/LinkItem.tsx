import { Box } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface LinkItemProps {
  label: string;
  href: string;
}

export function LinkItem(props: LinkItemProps) {
  const { label, href } = props;

  const location = useLocation();

  return (
    <Box fontWeight={location.pathname == href ? "bold" : "normal"}>
      <Link to={href}>{label}</Link>
    </Box>
  );
}
