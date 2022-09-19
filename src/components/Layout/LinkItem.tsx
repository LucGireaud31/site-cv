import { Link } from "react-router-dom";

interface LinkItemProps {
  label: string;
  to: string;
}

export function LinkItem(props: LinkItemProps) {
  const { label, to } = props;

  return (
    <Link to={to} style={{ fontWeight: "bold" }}>
      {label}
    </Link>
  );
}
