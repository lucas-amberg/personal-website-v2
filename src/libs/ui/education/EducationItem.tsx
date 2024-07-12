"use client";
import { HStack, VStack } from "ss/jsx";
import Image from "next/image";
import { Heading, Text } from "@radix-ui/themes";

export interface EducationItemProps {
    image: {
        src: string;
        alt: string;
    };
    heading: string;
    headingSize?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
    timeframe: string;
    [key: string]: any;
}

export function EducationItem({
    image,
    heading,
    headingSize,
    timeframe,
    ...props
}: EducationItemProps) {
    return (
        <HStack
            p={props.p || props.padding || "20px"}
            alignItems="flex-start"
            justifyContent="flex-start"
            overflow="hidden"
            borderRadius={props.borderRadius || "16px"}
            {...props}>
            <VStack
                width="20%"
                alignItems="flex-start"
                height="100%">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={60}
                    height={60}
                />
            </VStack>
            <VStack alignItems="flex-start">
                <Heading size={headingSize || "8"}>{heading}</Heading>
                <Text weight={"bold"}>{timeframe}</Text>
            </VStack>
        </HStack>
    );
}
