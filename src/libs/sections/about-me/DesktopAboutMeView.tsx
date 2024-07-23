"use client";
import { HStack, VStack } from "panda";
import Image from "next/image";
import { Button, Heading, Text } from "@radix-ui/themes";
import { Fade } from "react-awesome-reveal";
import { token } from "ss/tokens";
import { css } from "ss/css";
import Link from "next/link";
import { DocumentTextIcon } from "@heroicons/react/24/solid";

export function DesktopAboutMeView() {
    return (
        <VStack
            width="100%"
            justifyContent="center"
            display={{
                base: "none",
                lg: "flex",
            }}
            position="relative"
            alignItems="flex-start"
            height="min(100dvh, 100vh)">
            <VStack
                alignItems="start"
                borderRadius="12px"
                padding="20px"
                width="70%"
                bg="gray.12">
                <HStack
                    gap="25"
                    alignItems="flex-end">
                    <Heading size="8">Lucas Amberg</Heading>
                    <Image
                        src="/logos/logo.jpg"
                        style={{ borderRadius: "12px" }}
                        alt="Lucas Amberg Logo"
                        width="75"
                        height="75"
                    />
                </HStack>
                <Text size={{ initial: "5", xl: "6" }}>
                    As an enthusiastic and dedicated
                </Text>
                <Heading size="9">
                    <Fade
                        cascade
                        triggerOnce
                        damping={0.1}>
                        Software Engineer
                    </Fade>
                </Heading>
                <Text size={{ initial: "5", xl: "6" }}>
                    currently pursuing a Bachelor of Science in Computer Science
                    at
                </Text>
                <Heading
                    color="yellow"
                    size="8">
                    California State University, Long Beach
                    <span style={{ color: "white" }}>,</span>
                </Heading>
                <Text size={{ initial: "5", xl: "6" }}>I am set to </Text>
                <Heading size="8">
                    graduate in{" "}
                    <span style={{ color: token("colors.purple.9") }}>
                        May 2026
                    </span>
                    .
                </Heading>
                <Text size={{ initial: "5", xl: "6" }}>
                    My professional journey includes years of hands-on
                    experience in full stack web development and software
                    engineering.
                </Text>
            </VStack>
            <Fade
                className={css({
                    marginLeft: "auto",
                    position: "absolute",
                    right: "0",
                    bottom: "0",
                    marginTop: "auto",
                    maxHeight: "80vh",
                    width: { lg: "30%", xl: "25%" },
                })}
                triggerOnce
                direction="up"
                fraction={0}
                duration={1000}>
                <Image
                    src="/images/me-transparent.png"
                    width="450"
                    height="700"
                    alt="Lucas Amberg"
                />
            </Fade>
            <Link
                href="/Lucas_Amberg_Resume.pdf"
                target="_blank">
                <Button size="4">
                    <DocumentTextIcon
                        width="24"
                        height="24"
                    />{" "}
                    View Resume
                </Button>
            </Link>
        </VStack>
    );
}
