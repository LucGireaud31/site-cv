import { Flex, Image, Link, Text } from "@chakra-ui/react";

interface GitHubLinkProps {
  href: string;
}

export function GitHubLink(props: GitHubLinkProps) {
  const { href } = props;

  return (
    <Link href={href} target="_blank " textDecor="none !important">
      <Flex align="center" w="120px" flexDir="column">
        <Image
          src="images/github.png"
          rounded="full"
          boxSize="32px"
          ml={2}
          cursor="pointer"
        />
        <Text fontSize={9} ml={1} color="white">
          Voir le code source
        </Text>
      </Flex>
    </Link>
  );
}
