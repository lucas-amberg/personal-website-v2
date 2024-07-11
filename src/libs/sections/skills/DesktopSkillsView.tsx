import { VStack, HStack } from "panda";
import { Heading, Text } from "@radix-ui/themes";
import { Fade, Rotate } from "react-awesome-reveal";
import Image from "next/image";

export function DesktopSkillsView() {
    const skills = [
        "Next.js (& React)",
        "TypeScript (& JavaScript)",
        "Neo4j",
        "Full Stack Web Development",
        "Nx Monorepo",
        "Turborepo",
        "Python"
    ];

    return (
        <VStack
            width="screen"
            position="relative"
            alignItems="center"
            p="90px"
            justifyContent="center"
            height="screen"
            bg="gray.12">
            <VStack
                width="50%"
                marginLeft="auto"
                height="100%">
                <Heading size="9">Technical Skills</Heading>
                <VStack
                    overflow="hidden"
                    bg="#111"
                    width="100%"
                    p="40px"
                    gap='15px'
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
                                    weight="bold">
                                    - {skill}
                                </Text>
                            ))}
                    </Fade>
                </VStack>
            </VStack>
            <Rotate style={{position: 'absolute', top: '30px', left: '36px', rotate: '23deg'}} direction="top-left">
                <Image src={'/logos/react.png'} alt='React Logo' width={178} height={178}  />
            </Rotate>
            <Rotate style={{position: 'absolute', bottom: '76px', left: '59px', rotate: '-30deg'}} direction="top-right">
                <Image src={'/logos/python.svg'} alt='Python Logo' width={178} height={178}  />
            </Rotate>
            <Rotate style={{position: 'absolute', bottom: '76px', right: '59px', rotate: '23deg'}} direction="bottom-left">
                <Image src={'/logos/javascript.png'} alt='Python Logo' width={197} height={197}  />
            </Rotate>
        </VStack>
    );
}
