"use client";
import { HStack, VStack, Box } from "panda";
import Image from "next/image";
import { Heading, Text } from "@radix-ui/themes";
import { Fade } from "react-awesome-reveal";
import { token } from "ss/tokens";
import { ContactFormView } from "./ContactFormView";

export function ContactForm() {
    return (
        <>
            <Box
                padding="0"
                overflow="hidden"
                position="relative">
                <ContactFormView />
            </Box>
        </>
    );
}
