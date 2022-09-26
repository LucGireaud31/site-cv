import { Link } from "react-router-dom";

interface LinkItemProps {
  label: string;
  href: string;
  to: string;
}

export function LinkItem(props: LinkItemProps) {
  const { label, href, to } = props;

  return <Link to={href}>{label}</Link>;
}
