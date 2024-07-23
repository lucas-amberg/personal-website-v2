"use client";
import { HStack, VStack } from "panda";
import { Heading, Text, HoverCard, Avatar } from "@radix-ui/themes";
import { Fade } from "react-awesome-reveal";
import { token } from "ss/tokens";
import { EducationItem } from "@/libs/ui/education/EducationItem";
import Link from "next/link";
import Image from "next/image";
import ProjectItem from "@/libs/ui/projects/ProjectItem";

export function ProjectsView() {
    return (
        <HStack
            width="screen"
            minHeight="screen"
            flexDirection={{
                base: "column",
                xl: "row",
            }}
            p={{
                base: "20",
                xl: "90",
            }}>
            <VStack
                width={{
                    base: "full",
                    xl: "50%",
                }}
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
                                    <Avatar
                                        src="https://avatars.githubusercontent.com/u/102396588?v=4"
                                        size="4"
                                        fallback={"L"}
                                        radius="full"
                                        alt="GitHub Account"
                                    />
                                    <VStack alignItems="flex-start">
                                        <Heading>lucas-amberg</Heading>{" "}
                                        <Text>GitHub</Text>
                                    </VStack>
                                </HStack>
                            </Link>
                        </HoverCard.Content>
                    </HoverCard.Root>
                    , but I have showcased some of the projects I am most proud
                    of in this section.
                </Text>
            </VStack>
            <VStack
                gap="20"
                width={{
                    base: "full",
                    xl: "50%",
                }}>
                <ProjectItem
                    images={[
                        {
                            src: "/projects/green-field-homepage.png",
                            alt: "Green Field Image 1",
                        },
                        {
                            src: "/projects/green-field-menu-item.png",
                            alt: "Green Field Image 2",
                        },
                    ]}
                    title="Green Field Churrascaria Website"
                    description="Creating a contracted website redesign for Green Field Churrascaria, a local restaurant in Long Beach, California."
                    skills={[
                        "Next.js",
                        "TypeScript",
                        "Panda CSS",
                        "Neo4j",
                        "Park UI",
                    ]}
                    startDate="May 2024"
                    endDate="In Progress"
                    tasks={[
                        "Leading development and designing system structure for two person contracted website redevelopment.",
                        "Streamlined development using Uix, a Neo4j graph library, allowing for seamless client tracking and reservation system, digitizing a formerly analog reservation system and lowering restaurant operational costs.",
                    ]}
                />
                <ProjectItem
                    images={[
                        {
                            src: "/projects/clear-view-client.png",
                            alt: "Clearview Pros Image 1",
                        },
                        {
                            src: "/projects/clear-view-users.png",
                            alt: "Clearview Pros Image 2",
                        },
                    ]}
                    title="Clearview Pros CRM"
                    description="Solo contract designing a CRM web software for Clearview Pros, a local window washing business based in Orange County."
                    skills={[
                        "Next.js",
                        "TypeScript",
                        "Panda CSS",
                        "Neo4j",
                        "Radix UI",
                    ]}
                    startDate="June 2024"
                    endDate="In Progress"
                    tasks={[
                        "Designed authentication system using Uix (Neo4j) and Auth.js, protecting company data from outsiders.",
                        "Developed clean UI using Radix and Panda CSS, making client registration and keeping track of jobs simple for employees and users.",
                        "Implemented a sorting system to keep track of when clients need to be contacted for new jobs, resulting in $1300+ in new sales in under a month.",
                    ]}
                />
            </VStack>
        </HStack>
    );
}
