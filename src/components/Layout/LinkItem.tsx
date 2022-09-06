import { Link } from "@chakra-ui/react";

interface LinkItemProps {
  label: string;
  href: string;
}

export function LinkItem(props: LinkItemProps) {
  const { label, href } = props;

  return (
    <Link href={href} fontWeight="bold" _hover={{ textDecoration: "none" }}>
      {label}
    </Link>
  );
}
