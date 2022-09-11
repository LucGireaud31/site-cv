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
      borderColor="theme.500"
      rounded="full"
      pr={3}
      color="theme.500"
      _hover={{ bg: "theme.400", color: "white" }}
      cursor="pointer"
    >
      <Image src={icon} w="50px" rounded="full" />
      <Text> {title}</Text>
    </HStack>
  );
}
