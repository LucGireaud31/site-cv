import { Box, HStack, Image } from "@chakra-ui/react";

interface CompanyBulletPointProps {
  fileName: string;
  label: string;
}

export function CompanyBulletPoint(props: CompanyBulletPointProps) {
  const { fileName, label } = props;

  return (
    <HStack ml={10} mt={3}>
      <Box>-</Box>
      <Image
        rounded="lg"
        boxSize={7}
        src={"/images/company-icons/" + fileName}
      />
      <Box fontWeight="extrabold">{label}</Box>
    </HStack>
  );
}
