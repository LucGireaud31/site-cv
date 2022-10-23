import { Image, Link } from "@chakra-ui/react";

interface PlayStoreLinkProps {
  href: string;
}

export function PlayStoreLink(props: PlayStoreLinkProps) {
  const { href } = props;

  return (
    <Link href={href} target="_blank">
      <Image src="images/google_play_link.png" w="200px" cursor="pointer" />
    </Link>
  );
}
