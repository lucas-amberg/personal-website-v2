import { HStack, VStack } from "panda";
import { Heading, Text } from "@radix-ui/themes";
import { Fade } from "react-awesome-reveal";
import { token } from "ss/tokens";

export function DesktopEducationView() {
    return (
        <HStack
            width="screen"
            minHeight="screen"
            p="90">
            <VStack></VStack>
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
