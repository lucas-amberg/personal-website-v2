import { VStack, HStack } from "panda";
import { Heading, Text } from "@radix-ui/themes";
import { Fade, Rotate } from "react-awesome-reveal";
import Image from "next/image";
import { token } from "ss/tokens";
import { skills } from "@/libs/utility/constants/skills";

export function DesktopWorkExperienceView() {
    return (
        <VStack
            width="screen"
            position="relative"
            alignItems="center"
            p="90px"
            display={{
                base: "none",
                lg: "flex",
            }}
            justifyContent="center"
            height="screen"
            bg="gray.12">
            <VStack textAlign="center">
                <Heading size="9">Work Experience</Heading>
                <Text size="4">
                    My most valuable time spent on my learning journey has been
                    from my work experiences.
                </Text>{" "}
                <Text size="4">
                    I love spending time in my classes and learning more about
                    computer science, but the only thing I love more is{" "}
                    <span
                        style={{
                            color: token("colors.purple.9"),
                        }}>
                        building software projects
                    </span>
                    .
                </Text>{" "}
                <Text size="4">
                    Work gives me the opportunity to contribute to{" "}
                    <span
                        style={{
                            color: token("colors.blue.8"),
                        }}>
                        long term
                    </span>{" "}
                    and{" "}
                    <span
                        style={{
                            color: token("colors.blue.8"),
                        }}>
                        industry standard
                    </span>{" "}
                    software initiatives, with endless backlog of work to do.
                </Text>
                <Heading style={{ color: token("colors.purple.9") }}>
                    "You learn software engineering by engineering software..."
                </Heading>
            </VStack>
        </VStack>
    );
}
