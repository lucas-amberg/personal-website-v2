import { VStack, HStack } from "panda";
import { Heading, Text } from "@radix-ui/themes";
import { Fade, Rotate } from "react-awesome-reveal";
import Image from "next/image";
import { token } from "ss/tokens";

export function MobileSkillsView() {
    const skills = [
        "Next.js (& React)",
        "TypeScript (& JavaScript)",
        "Neo4j",
        "Full Stack Web Development",
        "Nx Monorepo",
        "Turborepo",
        "Python",
    ];

    return (
        <HStack
            width="screen"
            position="relative"
            alignItems="center"
            p="90px"
            display={{
                base: 'flex',
                lg: 'none'
            }}
            justifyContent="center"
            height="screen"
            bg="gray.12">
            <VStack
                height="100%"
                justifyContent="center"
                width="50%"
                zIndex='10'
                alignItems="flex-start">
                <Heading size="8">
                    As a{" "}
                    <span
                        style={{
                            color: token("colors.purple.9"),
                        }}>
                        software engineer
                    </span>...
                </Heading>
                <Text size="4">
                    I am always learning and adopting new skills and
                    technologies into my tech stack.
                </Text>
                <Text size="4">
                    I explore options and find ways to integrate new frameworks,
                    libraries, and other innovative tools into my projects and
                    development processes.
                </Text>
                <Text
                    size="5"
                    color="blue">
                    Learning isn't just part of the journey, it's the best part.
                </Text>
            </VStack>
            <VStack
                width="50%"
                marginLeft="auto"
                
                height="100%">
                <Heading size="9" style={{zIndex:'10'}}>Technical Skills</Heading>
                <VStack
                    overflow="hidden"
                    bg="#111"
                    width="100%"
                    p="40px"
                    gap="15px"
                    alignItems="flex-start"
                    height="100%"
                    borderRadius="12px">
                    <Fade
                        cascade
                        triggerOnce
                        damping={0.3}
                        direction="left">
                        {skills
                            .sort((a, b) => b.length - a.length)
                            .map((skill) => (
                                <Text
                                    size="6"
                                    style={{
                                        zIndex: '10'
                                    }}
                                    key={skill}
                                    weight="bold">
                                    - {skill}
                                </Text>
                            ))}
                    </Fade>
                </VStack>
            </VStack>
            <Rotate triggerOnce
                style={{
                    position: "absolute",
                    top: "22px",
                    left: "29px",
                    rotate: "23deg",
                }}
                direction="top-left">
                <Image
                    src={"/logos/next-js.svg"}
                    alt="Next.js Logo"
                    width={178}
                    height={178}
                />
            </Rotate>
            <Rotate triggerOnce
                style={{
                    position: "absolute",
                    bottom: "62px",
                    left: "230px",
                    rotate: "23deg",
                }}
                direction="top-left">
                <Image
                    src={"/logos/react.png"}
                    alt="React Logo"
                    width={72}
                    height={72}
                />
            </Rotate>
            <Rotate triggerOnce
                style={{
                    position: "absolute",
                    bottom: "76px",
                    left: "59px",
                    rotate: "-30deg",
                }}
                direction="top-right">
                <Image
                    src={"/logos/python.svg"}
                    alt="Python Logo"
                    width={178}
                    height={178}
                />
            </Rotate>
            <Rotate triggerOnce
                style={{
                    position: "absolute",
                    bottom: "76px",
                    right: "59px",
                    rotate: "23deg",
                }}
                direction="bottom-left">
                <Image
                    src={"/logos/typescript.svg"}
                    alt="TypeScript Logo"
                    width={197}
                    height={197}
                />
            </Rotate>
            <Rotate triggerOnce
                style={{
                    position: "absolute",
                    bottom: "39px",
                    right: "242px",
                    rotate: "-22deg",
                }}
                direction="bottom-left">
                <Image
                    src={"/logos/javascript.png"}
                    alt="JavaScript Logo"
                    width={67}
                    height={67}
                />
            </Rotate>
            <Rotate triggerOnce
                style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    rotate: "-22deg",
                }}
                direction="top-right">
                <Image
                    src={"/logos/neo4j.svg"}
                    alt="Neo4j Logo"
                    width={162}
                    height={162}
                />
            </Rotate>
        </HStack>
    );
}
