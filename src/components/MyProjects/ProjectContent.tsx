import { Center, Flex, Heading, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { AnimatedDiv } from "../shared/AnimatedDiv";
import { GitHubLink } from "../shared/GitHubLink";

interface ProjectContentProps {
  scrollRatio: number;
  title: string;
  body: ReactNode;
  footer: ReactNode;
  gitLink?: string;
}

export function ProjectContent(props: ProjectContentProps) {
  const { scrollRatio, title, body, footer, gitLink } = props;

  const isActive = scrollRatio > 0.07 && scrollRatio < 0.93;

  return (
    <Center h="full" ml="50%" w="50%">
      <AnimatedDiv
        isActive={isActive}
        animationActive={"animate__fadeInRight"}
        animationInactive={"animate__fadeOutRight"}
      >
        <VStack textAlign="center" mx={120} pb="98px">
          <Flex justifyContent="center">
            <Heading size="lg" color="black" pt={1}>
              {title}
            </Heading>
            {gitLink && <GitHubLink href={gitLink} />}
          </Flex>
          <AnimatedDiv
            isActive={isActive}
            animationActive={"animate__fadeInRight"}
            animationInactive={"animate__fadeOutRight"}
          >
            {body}
          </AnimatedDiv>

          <AnimatedDiv
            isActive={isActive}
            animationActive={"animate__fadeInRight"}
            animationInactive={"animate__fadeOutRight"}
          >
            {footer}
          </AnimatedDiv>
        </VStack>
      </AnimatedDiv>
    </Center>
  );
}
