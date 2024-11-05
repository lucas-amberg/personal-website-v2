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
                    <Heading
                        as="h3"
                        size="9">
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
                        <Heading
                            as="h3"
                            size="9">
                            Work
                        </Heading>
                    </Fade>
                    <Fade
                        direction="right"
                        triggerOnce>
                        <Heading
                            as="h3"
                            size="9">
                            Experience
                        </Heading>
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
                <Heading
                    as="h3"
                    style={{ color: token("colors.purple.9") }}>
                    "You learn software engineering by engineering software..."
                </Heading>
            </VStack>
            <VStack
                display="flex"
                pt="20px"
                width="100%"
                alignItems="stretch">
                <WorkExperienceItem
                    bg="#3064bc"
                    color="#FFF"
                    minHeight="100%"
                    width="100%"
                    headingSize="7"
                    image={{
                        src: "/logos/linkedin.svg",
                        alt: "LinkedIn Logo",
                    }}
                    heading="Incoming Software Engineering Intern"
                    companyName="LinkedIn"
                    timeframe="Starting May 2025"
                    description="I am very honored to be joining the LinkedIn team at the Mountain View campus next summer."
                />
                <WorkExperienceItem
                    bg="#012F1F"
                    color="#62CF7D"
                    minHeight="100%"
                    width="100%"
                    headingSize="7"
                    image={{
                        src: "/logos/hirebird-logo.jpg",
                        alt: "Hirebird Logo",
                    }}
                    heading="Software Engineer"
                    companyName="Hirebird"
                    timeframe="August 2024 - Present"
                    description="As a software engineer at Hirebird, me and a team of three other talented engineers are building a platform to help early career professionals and laborers find jobs. Partnered with Lifetime Fitness, Rainbow Room, and many other companies, Hirebird is already making a huge impact in the New York City hiring scene, and will continue to gain prominence as new features are implemented into the platform."
                    achievements={[
                        'Implementing "Apply on Hirebird" feature, a one click solution for job applications on Hirebird partnered positions, used by 150+ job posts and 1000+ applicants.',
                        "Resolved dozens of performance issues related to data fetching, reducing load times by an average of 0.5s per page on all pages of the platform.",
                    ]}
                />
            </VStack>
            <HStack
                display="flex"
                flexDirection={{
                    base: "column",
                    xl: "row",
                }}
                width="100%"
                pb="20px"
                alignItems="stretch">
                <WorkExperienceItem
                    bg="black"
                    color="yellow.7"
                    headingSize="7"
                    minHeight="100%"
                    image={{ src: "/logos/plutotv.png", alt: "Pluto TV Logo" }}
                    heading="Software Engineering Intern"
                    companyName="Pluto TV"
                    width={{
                        base: "100%",
                        xl: "1/3",
                    }}
                    timeframe="June 2024 - August 2024"
                    description="As a software engineering intern at Pluto TV, I learned how to participate in scrum with large teams and develop in an agile environment. I also practiced writing scalable software at an industry standard level."
                    achievements={[
                        "Delivered a presentation on improving React Native apps for screen readers about better focus management and keyboard navigation.",
                        "Developed six library generators and four app generators with Nx, making library and app generation over 80% faster.",
                        "Documented and presented my work on app and library generators to 200+ team members in 2 presentations.",
                    ]}
                />
                <WorkExperienceItem
                    bg="#012F1F"
                    color="#62CF7D"
                    minHeight="100%"
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
                    timeframe="February 2024 - June 2024"
                    description="As a software engineering intern at Hirebird, I gained experience in a fast paced startup environment and learned several valuable full stack development skills."
                    achievements={[
                        "Developed frontend with Next.js and Panda CSS, backend with TypeScript and Neo4j. Built cloud infrastructure with AWS and Pulumi.",
                        "Implemented live messaging with file uploads. Used AWS S3, Liveblocks, and Next.js. Styled using Panda CSS and Park UI recipes for a clean, consistent style.",
                        "Scrummed with a team of 10+ developers 2-3 times weekly, used Figma, Jira, Miro, Notion, and other tools to visualize concepts and plan sprints or kanban.",
                    ]}
                />
                <WorkExperienceItem
                    bg="#FFFFFF"
                    minHeight="100%"
                    headingSize="7"
                    color="#608C32"
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
                    timeframe="March 2023 - May 2024"
                    description="As a student worker at the Port of Los Angeles, I supported the IT team in helping many different departments and divisions with their technology."
                    achievements={[
                        "Automated Microsoft Office patches on 200+ computers with Visual Basic scripts, which cut update times by 80%.",
                        "Streamlined app and computer setup with custom batch files and command line operations, which cut setup time by 30%.",
                    ]}
                />
            </HStack>
        </VStack>
    );
}
