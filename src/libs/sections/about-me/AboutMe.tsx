"use client";
import { HStack, VStack, Box } from "panda";
import Image from "next/image";
import { Heading, Text } from "@radix-ui/themes";
import { Fade } from "react-awesome-reveal";
import { token } from "ss/tokens";
import { DesktopAboutMeView } from "./DesktopAboutMeView";

export function AboutMe() {
    return (
        <>
            <Box>
                <DesktopAboutMeView />
            </Box>
        </>
    );
}
