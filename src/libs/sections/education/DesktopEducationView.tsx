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
            display={{
                base: "none",
                xl: "flex",
            }}
            p="90">
            <VStack width="50%">
                <EducationItem
                    color="black"
                    degree="B.S. Computer Science"
                    timeframe="Nov 2022 - May 2026"
                    width="90%"
                    bg="yellow.8"
                    image={{
                        src: "/logos/csulb-logo.png",
                        alt: "California State University, Long Beach Logo",
                    }}
                    heading="California State University, Long Beach"
                    headingSize="8"
                    gpa="3.794"
                    honors={[
                        {
                            honor: "Dean's Honors List",
                            terms: ["Fall 2022", "Spring 2023"],
                        },
                        {
                            honor: "President's Honors List",
                            terms: ["Fall 2023", "Spring 2024"],
                        },
                    ]}
                    relevantCoursework={[
                        "Data Structures, Algorithms, Object Oriented Application Development, Discrete Mathematics",
                    ]}
                    clubs={[
                        "Kappa Sigma Fraternity",
                        "Google Developer Student Club",
                        "Association for Computing Machinery",
                        "AI Research Club",
                    ]}
                />
                <EducationItem
                    color="white"
                    degree="B.S. (Hons) Computer Science"
                    timeframe="Aug 2024 - Jan 2025"
                    width="90%"
                    bg="purple.8"
                    image={{
                        src: "/logos/uh.jpg",
                        alt: "University of Hertfordshire Logo",
                    }}
                    heading="University of Hertfordshire"
                    headingSize="8"
                    relevantCoursework={[
                        "Computer Systems Security, Software Architecture, Web Development and Accessibility",
                    ]}
                    description="I will be fortunate enough to be studying abroad at the University of Hertfordshire in Hatfield, England, UK for this upcoming semester."
                />
            </VStack>
            <VStack
                width="50%"
                alignItems="flex-start">
                <Fade
                    direction="left"
                    triggerOnce>
                    <Heading
                        as="h3"
                        size="9">
                        Education
                    </Heading>
                </Fade>
                <Fade
                    direction="right"
                    triggerOnce>
                    <Heading
                        as="h3"
                        size="9">
                        History
                    </Heading>
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
                    Computer Science Theory.
                </Text>
                <Text>
                    My web development journey is mostly{" "}
                    <span style={{ color: token("colors.purple.9") }}>
                        independent
                    </span>{" "}
                    of my studies at my university, which is more focused on
                    core Computer Science concepts such as Discrete Mathematics,
                    Data Structures, and Algorithms.
                </Text>
            </VStack>
        </HStack>
    );
}
