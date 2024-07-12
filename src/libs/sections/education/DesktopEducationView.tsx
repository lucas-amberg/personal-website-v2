import { HStack, VStack } from "panda";
import { Heading, Text } from "@radix-ui/themes";
import { Fade } from "react-awesome-reveal";
import { token } from "ss/tokens";
import { EducationItem } from "@/libs/ui/education/EducationItem";

export function DesktopEducationView() {
    return (
        <HStack
            width="screen"
            minHeight="screen"
            p="90">
            <VStack width="50%">
                <EducationItem
                    color="black"
                    timeframe="Nov 2022 - May 2026"
                    width="90%"
                    bg="yellow.8"
                    image={{
                        src: "/logos/csulb-logo.png",
                        alt: "California State University, Long Beach Logo",
                    }}
                    heading="California State University, Long Beach"
                    headingSize="8"
                />
            </VStack>
            <VStack
                width="50%"
                alignItems="flex-start">
                <Fade direction="left">
                    <Heading size="9">Education</Heading>
                </Fade>
                <Fade direction="right">
                    <Heading size="9">History</Heading>
                </Fade>
                <Text color="yellow">
                    <span style={{ color: "white" }}>
                        I am currently entering my third year at
                    </span>{" "}
                    CSU Long Beach<span style={{ color: "white" }}>.</span>
                </Text>
                <Text>
                    As a{" "}
                    <span style={{ color: token("colors.blue.8") }}>
                        Computer Science
                    </span>{" "}
                    major, my studies are largely focused on mathematics and
                    Computer Science theory.
                </Text>
                <Text>
                    My web development journey is mostly{" "}
                    <span style={{ color: token("colors.purple.9") }}>
                        independent
                    </span>{" "}
                    of my studies at my University, which is more focused on
                    core Computer Science concepts such as Discrete Mathematics,
                    Data Structures, and Algorithms.
                </Text>
            </VStack>
        </HStack>
    );
}
