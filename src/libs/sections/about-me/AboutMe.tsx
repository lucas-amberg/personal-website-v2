"use client";
import { HStack, VStack, Box } from "panda";
import Image from "next/image";
import { Heading, Text } from "@radix-ui/themes";
import { Fade } from "react-awesome-reveal";
import { token } from "ss/tokens";
import { DesktopAboutMeView } from "./DesktopAboutMeView";
import { MobileAboutMeView } from "./MobileAboutMeView";

export function AboutMe() {
    return (
        <>
            <Box
                padding="0"
                overflow="hidden">
                <DesktopAboutMeView />
                <MobileAboutMeView />
            </Box>
        </>
    );
}
