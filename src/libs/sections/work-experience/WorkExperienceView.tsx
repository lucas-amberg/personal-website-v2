import { VStack, HStack } from "panda";
import { Heading, Text } from "@radix-ui/themes";
import { Fade, Rotate } from "react-awesome-reveal";
import Image from "next/image";
import { token } from "ss/tokens";
import { skills } from "@/libs/utility/constants/skills";
import { WorkExperienceItem } from "@/libs/ui/work-experience/WorkExperienceItem";

export function WorkExperienceView() {
    return (
        <VStack
            width="screen"
            position="relative"
            alignItems="center"
            p={{
                base: "20px",
                xl: "90px",
            }}
            justifyContent="center"
            minHeight="screen"
            bg="gray.12">
            <VStack
                alignItems={{
                    base: "flex-start",
                    xl: "center",
                }}
                textAlign={{ base: "left", xl: "center" }}>
                <VStack
                    display={{
                        base: "none",
                        xl: "flex",
                    }}>
                    <Heading size="9">
                        <Fade
                            cascade
                            damping={0.2}
                            triggerOnce
                            direction="top-left">
                            Work Experience
                        </Fade>
                    </Heading>
                </VStack>
                <VStack
                    display={{
                        base: "flex",
                        xl: "none",
                    }}
                    alignItems="flex-start">
                    <Fade
                        direction="left"
                        triggerOnce>
                        <Heading size="9">Work</Heading>
                    </Fade>
                    <Fade
                        direction="right"
                        triggerOnce>
                        <Heading size="9">Experience</Heading>
                    </Fade>
                </VStack>
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
            <HStack
                flexDirection={{
                    base: "column",
                    xl: "row",
                }}
                width="100%"
                height={{
                    base: "auto",
                    xl: "screen",
                }}
                py="20px"
                alignItems="stretch">
                <WorkExperienceItem
                    bg="black"
                    color="yellow.7"
                    height={{
                        base: "fit-content",
                        xl: "100%",
                    }}
                    headingSize="7"
                    image={{ src: "/logos/plutotv.png", alt: "Pluto TV Logo" }}
                    heading="Software Engineering Intern"
                    companyName="Pluto TV"
                    width={{
                        base: "100%",
                        xl: "1/3",
                    }}
                    timeframe="June 2024 - Present"
                    description="As a software engineering intern at Pluto TV, I learned how to participate in scrum with large teams and develop in an agile environment. I also practiced writing scalable software at an industry standard level."
                    achievements={[
                        "Constructed two POC demos for accessibility in React Native for focus management and keyboard navigation.",
                        "Developed six library generators and four app generators using Nx, speeding up library and app generation by over 80%",
                        "Documented and presented my implementation for app and library generators to 200+ team members in 2 presentations.",
                    ]}
                />
                <WorkExperienceItem
                    bg="green.12"
                    color="green.7"
                    height="100%"
                    width={{
                        base: "100%",
                        xl: "1/3",
                    }}
                    headingSize="7"
                    image={{
                        src: "/logos/hirebird-logo.jpg",
                        alt: "Hirebird Logo",
                    }}
                    heading="Software Engineering Intern"
                    companyName="Hirebird"
                    timeframe="Feb 2024 - June 2024"
                    description="As a software engineering intern at Hirebird, I gained experience in a fast paced startup environment and learned several valuable full stack development skills."
                    achievements={[
                        "Developing frontend with Next.js and Panda CSS, backend with TypeScript and Neo4j, and cloud infrastructure with AWS and Pulumi.",
                        "Implemented live messaging with file uploads using AWS S3, Liveblocks, and Next.js along with Panda CSS and Park UI for clean and consistent styling.",
                        "Scrumming with team of 10+ developers 2-3 times weekly using Figma, Jira, Miro, Notion, and other collaboration tools to visualize concepts and plan kanban or sprints.",
                    ]}
                />
                <WorkExperienceItem
                    bg="green.11"
                    height="100%"
                    headingSize="7"
                    width={{
                        base: "100%",
                        xl: "1/3",
                    }}
                    image={{
                        src: "/logos/pola-logo.jpg",
                        alt: "Port of Los Angeles Logo",
                    }}
                    heading="Information Technology Student Specialist"
                    companyName="Port of Los Angeles"
                    timeframe="Mar 2023 - May 2024"
                    description="As a student worker at the Port of Los Angeles, I supported the IT team in helping many different departments and divisions with their technology."
                    achievements={[
                        "Automated Microsoft Office patches across 200+ computers using Visual Basic scripts reducing update times by 80%",
                        "Streamlined application and computer setup process through the implementation of customized batch files and command line operations, resulting in a 30% reduction in overall setup time.",
                    ]}
                />
            </HStack>
        </VStack>
    );
}
