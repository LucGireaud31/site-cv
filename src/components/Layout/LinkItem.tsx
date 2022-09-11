import { Link } from "react-scroll";

interface LinkItemProps {
  label: string;
  href: string;
  to?: string;
}

export function LinkItem(props: LinkItemProps) {
  const { label, href, to } = props;

  return (
    <Link
      to={to ?? ""}
      href={href}
      style={{ fontWeight: "bold" }}
      smooth={true}
    >
      {label}
    </Link>
  );
}
