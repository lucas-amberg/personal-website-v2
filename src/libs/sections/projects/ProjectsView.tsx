"use client";
import { HStack, VStack } from "panda";
import { Heading, Text, HoverCard } from "@radix-ui/themes";
import { Fade } from "react-awesome-reveal";
import { token } from "ss/tokens";
import { EducationItem } from "@/libs/ui/education/EducationItem";
import Link from "next/link";
import Image from "next/image";

export function ProjectsView() {
    return (
        <HStack
            width="screen"
            minHeight="screen"
            display={{
                base: "none",
                xl: "flex",
            }}
            p="90">
            <VStack
                width="50%"
                alignItems="flex-start">
                <Fade
                    direction="down"
                    triggerOnce>
                    <Heading size="9">Projects</Heading>
                </Fade>
                <Text>
                    Aside from work experiences, personal projects are an
                    exciting way to{" "}
                    <span
                        style={{
                            color: token("colors.blue.8"),
                        }}>
                        test
                    </span>{" "}
                    my skills,{" "}
                    <span
                        style={{
                            color: token("colors.purple.9"),
                        }}>
                        practice
                    </span>{" "}
                    software engineering, and{" "}
                    <span
                        style={{
                            color: token("colors.yellow.8"),
                        }}>
                        design
                    </span>{" "}
                    systems on a smaller scale.
                </Text>
                <Text>
                    Over the last year, I have created several software projects
                    to showcase my current skills and learn new ones.
                </Text>
                <Text>
                    You can find all of my public projects on{" "}
                    <HoverCard.Root>
                        <HoverCard.Trigger>
                            <Link
                                target="_blank"
                                style={{
                                    color: token("colors.blue.10"),
                                    textDecoration: "underline",
                                }}
                                href="https://github.com/lucas-amberg">
                                my GitHub
                            </Link>
                        </HoverCard.Trigger>
                        <HoverCard.Content>
                            <Link
                                href="https://github.com/lucas-amberg"
                                target="_blank">
                                <HStack>
                                    <Image
                                        src="/logos/github.png"
                                        width={50}
                                        height={50}
                                        alt="GitHub Account"
                                    />
                                    <VStack alignItems="flex-start">
                                        <Heading>lucas-amberg</Heading>{" "}
                                        <Text>lucas-amberg</Text>
                                    </VStack>
                                </HStack>
                            </Link>
                        </HoverCard.Content>
                    </HoverCard.Root>
                    , but I have showcased some of the projects I am most proud
                    of in this section.
                </Text>
            </VStack>
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
                    relevantCoursework={["Database Fundamentals"]}
                    description="I will be fortunate enough to be studying abroad at the University of Hertfordshire in Hatfield, England, UK for this upcoming semester."
                />
            </VStack>
        </HStack>
    );
}
