"use client";
import { HStack, VStack } from "panda";
import { Heading, Text, HoverCard, Avatar } from "@radix-ui/themes";
import { Fade } from "react-awesome-reveal";
import { token } from "ss/tokens";
import { EducationItem } from "@/libs/ui/education/EducationItem";
import Link from "next/link";
import Image from "next/image";
import OpenSourceItem from "@/libs/ui/open-source/OpenSourceItem";

export function OpenSourceView() {
    return (
        <HStack
            width="screen"
            minHeight="screen"
            bg="gray.12"
            flexDirection={{
                base: "column-reverse",
                xl: "row",
            }}
            p={{
                base: "20",
                xl: "90",
            }}>
            <VStack
                gap="20"
                width={{
                    base: "full",
                    xl: "50%",
                }}>
                <Fade
                    cascade
                    triggerOnce
                    damping={0.4}>
                    <OpenSourceItem
                        image="https://avatars.githubusercontent.com/u/119950788?s=200&v=4"
                        title="ThinAir"
                        description="As a maintainer of Uix, a graph library by ThinAir, I have had the opportunity to contribute documentation as well as write unit tests for the library using Vitest."
                        skills={["Neo4j", "Vitest", "Next.js"]}
                        startDate="June 2024"
                        endDate="In Progress"
                        href="https://uix-docs.vercel.app"
                        repo="https://www.github.com/thinairthings/uix"
                        prs="https://github.com/search?q=org%3AThinAirThings+author%3Alucas-amberg+is%3Apr&type=pullrequests"
                        tasks={[
                            "Contributed entirety of documentation using Docusaurus, allowing for several new users and contributors to access the library.",
                            "Designed 30+ unit tests using Vitest to assert core graph database interactions and successful vector embedding of nodes.",
                        ]}
                    />
                    <OpenSourceItem
                        image="https://avatars.githubusercontent.com/u/6250754?s=200&v=4"
                        title="Ethereum"
                        description="As one of my first open source contributions, I contributed changes to the Ethereum.org website, such as adding new items to the site's DeSci page."
                        skills={["Next.js", "Chakra UI"]}
                        startDate="January 2024"
                        endDate="February 2024"
                        href="https://ethereum.org"
                        repo="https://www.github.com/ethereum/ethereum-org-website"
                        prs="https://github.com/search?q=org%3Aethereum+author%3Alucas-amberg+is%3Apr&type=pullrequests"
                        tasks={[
                            "Added several sites and cleared redundant links on DeSci page on Ethereum.org.",
                            "Fixed whitepaper redirect link, giving users access to the Ethereum whitepaper.",
                        ]}
                    />
                    <OpenSourceItem
                        image="https://avatars.githubusercontent.com/u/46634674?s=200&v=4"
                        title="TypeScript Eslint"
                        titleSize="5"
                        description="For my first open source contributions, I contributed changes to the TypeScript Eslint documentation, fixing accessibility issues."
                        skills={["Next.js", "TypeScript"]}
                        startDate="January 2024"
                        href="https://typescript-eslint.io"
                        repo="https://github.com/typescript-eslint/typescript-eslint"
                        prs="https://github.com/search?q=org%3Atypescript-eslint+author%3Alucas-amberg+is%3Apr+is%3Amerged&type=pullrequests"
                        tasks={[
                            "Fixed accessibility issues on documentation, making colors easier to read.",
                        ]}
                    />
                </Fade>
            </VStack>
            <VStack
                width={{
                    base: "full",
                    xl: "50%",
                }}
                textAlign={{
                    xl: "right",
                    base: "flex-start",
                }}
                alignItems={{
                    xl: "flex-end",
                    base: "flex-start",
                }}>
                <Fade
                    direction="down"
                    triggerOnce>
                    <Heading size="9">Open Source</Heading>
                </Fade>
                <Text>
                    As one of the most important qualities of the software
                    ecosystem, open source contributions are something I love
                    doing and{" "}
                    <span style={{ color: token("colors.blue.8") }}>
                        hope to do more in the future
                    </span>
                    .
                </Text>
                <Text>
                    While most fields such as business, retail, and others often
                    don't co-operate: one of the best qualities of Computer
                    Science and Software Engineering is the constant
                </Text>
                <Text
                    style={{ color: token("colors.purple.9") }}
                    size="6"
                    weight="bold">
                    collaboration and effort to make technology better for
                    everyone<span style={{ color: "white" }}>.</span>
                </Text>
                <Text>
                    Which is why I believe the open source initiative, the one
                    that created Git, Linux, and all of the technology used to
                    create this website, is the best thing to come out of
                    Computer Science,
                </Text>
                <Text
                    size="6"
                    weight="bold"
                    color="yellow">
                    and maybe even the world
                    <span style={{ color: "white" }}>.</span>
                </Text>
            </VStack>
        </HStack>
    );
}
