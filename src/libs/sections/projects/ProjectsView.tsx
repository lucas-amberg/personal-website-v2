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
                    <Heading
                        as="h3"
                        size="9">
                        Projects
                    </Heading>
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
                                        <Heading as="h3">lucas-amberg</Heading>{" "}
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
                <Fade triggerOnce>
                    <ProjectItem
                        href="https://www.interngoat.com"
                        images={[
                            {
                                src: "/projects/interngoat-homepage.png",
                                alt: "Interngoat Image 1",
                            },
                            {
                                src: "/projects/interngoat-features.png",
                                alt: "Interngoat Image 2",
                            },
                            {
                                src: "/projects/interngoat-companies.png",
                                alt: "Interngoat Image 3",
                            },
                            {
                                src: "/projects/interngoat-companies-previews.png",
                                alt: "Interngoat Image 4",
                            },
                            {
                                src: "/projects/interngoat-email.png",
                                alt: "Interngoat Image 5",
                            },
                        ]}
                        title="Interngoat"
                        description="Co-founder of Interngoat, building the best platform and newsletter to find internships worldwide."
                        skills={[
                            "Next.js",
                            "TypeScript",
                            "Panda CSS",
                            "Neo4j",
                            "Web Scraping",
                            "Open AI",
                        ]}
                        startDate="August 2024"
                        endDate="In Progress"
                        tasks={[
                            "Built autonomous web scraping system to find and input internships worldwide, adding hundreds of internships.",
                            "Developed the full platform including an internship list, internship search feature, and company list.",
                            "Designed and implemented a newsletter system using Resend and Vercel, sending a email everyday with new internships.",
                        ]}
                    />
                </Fade>
                <Fade triggerOnce>
                    <ProjectItem
                        images={[
                            {
                                src: "/projects/clear-view-home.png",
                                alt: "Clear View Image 1",
                            },
                            {
                                src: "/projects/clear-view-services.png",
                                alt: "Clear View Image 2",
                            },
                            {
                                src: "/projects/clear-view-reviews.png",
                                alt: "Clear View Image 3",
                            },
                            {
                                src: "/projects/clear-view-contact.png",
                                alt: "Clear View Image 4",
                            },
                            {
                                src: "/projects/clear-view-client.png",
                                alt: "Clear View Image 5",
                            },
                            {
                                src: "/projects/clear-view-users.png",
                                alt: "Clear View Image 6",
                            },
                        ]}
                        title="Clear View Website/CRM"
                        description="As the head of development at Clear View, I am spearheading a CRM project alongside a homepage featuring a review system and quoting calculators for customers. The first iteration of the project, developed in June 2024, has resulted in over $2000 in sales for Clear View, helping them maintain contact with their past customers and future clients. The new version, started in October 2024, hopes to further improve this software with more contact, legal and other document management, and lead developing features."
                        skills={[
                            "Next.js",
                            "TypeScript",
                            "Panda CSS",
                            "Neo4j",
                            "Radix UI",
                            "Auth.js",
                            "Systems Design",
                        ]}
                        href="https://clearviews.pro"
                        startDate="June 2024"
                        endDate="In Progress"
                        tasks={[
                            "Designing CRM system with client sign up and invoice management for 200+ customers, and employee management for 15 employees. Facilitating contact and long term relations leading to over $2000 in sales.",
                            "Building front end homepage for client reviews, photo gallery, and more marketing pages optimized for SEO",
                        ]}
                    />
                </Fade>
                <Fade triggerOnce>
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
                        href="https://greenfieldchurrascaria.com"
                        endDate="In Progress"
                        tasks={[
                            "Leading development and designing system structure for two person contracted website redevelopment.",
                            "Streamlined development using Uix, a Neo4j graph library, allowing for seamless client tracking and reservation system, digitizing a formerly analog reservation system and lowering restaurant operational costs.",
                        ]}
                    />
                </Fade>
                <Fade triggerOnce>
                    <ProjectItem
                        images={[
                            {
                                src: "/projects/pulse-homepage.png",
                                alt: "Pulse Image 1",
                            },
                            {
                                src: "/projects/pulse-hierarchy.png",
                                alt: "Pulse Image 2",
                            },
                        ]}
                        title="Pulse CRM"
                        description="Contract with three other developers working on Pulse, a CRM and project management software for Anova Solar."
                        skills={[
                            "Next.js",
                            "TypeScript",
                            "Panda CSS",
                            "Neo4j",
                            "Supabase",
                            "Park UI",
                        ]}
                        startDate="July 2024"
                        endDate="In Progress"
                        tasks={[
                            "Designed User Hierarchy page using React Flow and Uix to fetch hierarchy data.",
                            "Developed forgot password email flow using Supabase along with Park UI and Panda CSS for clean styles.",
                        ]}
                    />
                </Fade>
            </VStack>
        </HStack>
    );
}
