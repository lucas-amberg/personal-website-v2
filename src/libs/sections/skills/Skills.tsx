"use client";
import { HStack, VStack, Box } from "panda";
import Image from "next/image";
import { Heading, Text } from "@radix-ui/themes";
import { Fade } from "react-awesome-reveal";
import { token } from "ss/tokens";
import { DesktopSkillsView } from "./DesktopSkillsView";
import { MobileSkillsView } from "./MobileSkillsView";

export function Skills() {
    return (
        <>
            <Box
                padding="0"
                overflow="hidden"
                position="relative">
                <DesktopSkillsView />
                <MobileSkillsView />
            </Box>
        </>
    );
}
