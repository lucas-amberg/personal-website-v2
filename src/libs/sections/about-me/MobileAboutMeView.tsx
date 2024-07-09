"use client";
import { HStack, VStack, Box } from "panda";
import Image from "next/image";
import { Heading, Text } from "@radix-ui/themes";
import { Fade } from "react-awesome-reveal";
import { token } from "ss/tokens";
import { css } from "ss/css";

export function MobileAboutMeView() {
    return (
        <HStack
            width="98%"
            justifyContent="space-evenly"
            position="relative"
            alignItems="flex-start"
            height="min(100dvh, 100vh)"
            display={{
                base: "flex",
                lg: "none",
            }}>
            <VStack
                alignItems="start"
                borderRadius="12px"
                padding="20px"
                width="100%"
                bg="gray.12">
                <HStack
                    gap="25"
                    alignItems="flex-end">
                    <Heading size={{ initial: "6", sm: "8" }}>
                        Lucas Amberg
                    </Heading>
                    <Image
                        src="/logos/logo.jpg"
                        style={{ borderRadius: "12px" }}
                        alt="Lucas Amberg Logo"
                        width="50"
                        height="50"
                    />
                </HStack>
                <Text size={{ initial: "4", sm: "5" }}>
                    As an enthusiastic and dedicated
                </Text>
                <Heading size="9">Software Engineer</Heading>
                <Text size={{ initial: "4", sm: "5" }}>
                    currently pursuing a Bachelor of Science in Computer Science
                    at
                </Text>
                <Heading
                    color="yellow"
                    size="6">
                    California State University, Long Beach
                    <span style={{ color: "white" }}>,</span>
                </Heading>
                <Text size={{ initial: "4", sm: "5" }}>I am set to </Text>
                <Heading size="6">
                    graduate in{" "}
                    <span style={{ color: token("colors.purple.9") }}>
                        May 2026
                    </span>
                    .
                </Heading>
                <Box width="60%">
                    <Text size={{ initial: "4", sm: "5" }}>
                        My professional journey includes years of hands-on
                        experience in full stack web development and software
                        engineering.
                    </Text>
                </Box>
            </VStack>
            <Fade
                className={css({
                    marginLeft: "auto",
                    marginTop: "auto",
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    width: { base: "50%", sm: "40%", md: "37%" },
                })}
                triggerOnce
                direction="up"
                duration={1000}
                fraction={0}>
                <Image
                    src="/images/me-transparent.png"
                    width="400"
                    height="700"
                    alt="Lucas Amberg"
                />
            </Fade>
        </HStack>
    );
}
