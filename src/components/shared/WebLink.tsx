import { HStack, Image, Text } from "@chakra-ui/react";

interface WebLinkProps {
  href: string;
  title: string;
  icon: string;
}

export function WebLink(props: WebLinkProps) {
  const { href, title, icon } = props;

  return (
    <HStack
      as="a"
      href={href}
      target="_blank"
      border="2px"
      borderColor="theme.200"
      rounded="full"
      pr={3}
      color="white"
      _hover={{ bg: "theme.400", color: "white" }}
      cursor="pointer"
      transition="all .2s"
      _active={{ bg: "theme.300" }}
    >
      <Image src={icon} w="50px" rounded="full" />
      <Text color="inherit"> {title}</Text>
    </HStack>
  );
}
