import { VStack, HStack } from "panda";
import { Heading, Text } from "@radix-ui/themes";
import { Fade, Rotate } from "react-awesome-reveal";
import Image from "next/image";
import { token } from "ss/tokens";
import { skills } from "@/libs/utility/constants/skills";

export function MobileSkillsView() {

    const images = [
      {src: '/logos/next-js.svg', alt: 'Next.js Logo'},
      {src: '/logos/neo4j.svg', alt: 'Neo4j Logo'},
      {src: '/logos/typescript.svg', alt: 'TypeScript Logo'},
      {src: '/logos/python.svg', alt: 'Python Logo'}
    ]

    return (
        <VStack
            width="screen"
            position="relative"
            alignItems="center"
            gap='20px'
            py='40px'
            p="20px"
            display={{
                base: "flex",
                lg: "none",
            }}
            justifyContent="center"
            minHeight="screen"
            bg="gray.12">
            <VStack
              width='100%'
              alignItems='flex-start'
                height="100%">
                <Heading
                    size="9"
                    
                    style={{ zIndex: "10" }}>
                    Technical Skills
                </Heading>
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
                                        zIndex: "10",
                                    }}
                                    key={skill}
                                    weight="bold">
                                    - {skill}
                                </Text>
                            ))}
                    </Fade>
                </VStack>
            </VStack>
            <HStack>
              <Fade direction='up' damping={0.3} cascade triggerOnce>
                {images.map((image, index) => <Image src={image.src} key={index} alt={image.alt} width={140} height={140} />)}
              </Fade>
            </HStack>
            <VStack
                height="100%"
                justifyContent="center"
                zIndex="10"
                alignItems="flex-start">
                <Heading size="8">
                    As a{" "}
                    <span
                        style={{
                            color: token("colors.purple.9"),
                        }}>
                        software engineer
                    </span>
                    ...
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
                    Learning isn't just a part of the journey, it's the best part of the journey.
                </Text>
            </VStack>
        </VStack>
    );
}
