import { useContext } from "react";
import { Link } from "react-router-dom";
import { ScrollContainerContext } from "../ScrollContainer";

interface LinkItemProps {
  label: string;
  href: string;
  to?: string;
}

export function LinkItem(props: LinkItemProps) {
  const { label, href, to } = props;

  const { scrollTo } = useContext(ScrollContainerContext);

  return (
    <Link onClick={async () => to && scrollTo(`#${to}`)} to={href}>
      {label}
    </Link>
  );
}
