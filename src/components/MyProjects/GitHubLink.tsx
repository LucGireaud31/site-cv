import { Flex, HStack, Image, Link, Text } from "@chakra-ui/react";

interface GitHubLinkProps {
  href: string;
}

export function GitHubLink(props: GitHubLinkProps) {
  const { href } = props;

  return (
    <Link
      href={href}
      target="_blank "
      boxSize="32px"
      mr={-12}
      textDecor="none !important"
    >
      <Flex align="center" w="120px" flexDir="column">
        <Image
          src="images/github.png"
          rounded="full"
          boxSize="32px"
          cursor="pointer"
        />
        <Text fontSize={9} ml={1} color="black">
          Voir le code source
        </Text>
      </Flex>
    </Link>
  );
}
