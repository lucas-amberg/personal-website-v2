"use client";
import { HStack, VStack } from "ss/jsx";
import Image from "next/image";
import { Heading, Text } from "@radix-ui/themes";

export interface WorkExperienceItemProps {
    image: {
        src: string;
        alt: string;
    };
    heading: string;
    companyName?: string;
    headingSize?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
    timeframe: string;
    description?: string;
    achievements?: string[];
    [key: string]: any;
}

export function WorkExperienceItem({
    image,
    heading,
    headingSize,
    timeframe,
    description,
    companyName,
    achievements,
    ...props
}: WorkExperienceItemProps) {
    return (
        <HStack
            p={props.p || props.padding || "20px"}
            alignItems="flex-start"
            justifyContent="flex-start"
            overflow="hidden"
            borderRadius={props.borderRadius || "16px"}
            {...props}>
            <VStack
                width="15%"
                alignItems="flex-start"
                height="100%">
                <Image
                    style={{
                        borderRadius: "10px",
                    }}
                    src={image.src}
                    alt={image.alt}
                    width={60}
                    height={60}
                />
            </VStack>
            <VStack
                gap="4"
                width="85%"
                alignItems="flex-start">
                <Heading size={headingSize || "8"}>{heading}</Heading>
                {companyName && <Text weight="bold">{companyName}</Text>}
                <Text weight={"bold"}>{timeframe}</Text>
                {description && <Text size="2">{description}</Text>}
                {achievements && (
                    <VStack>
                        {achievements.map((achievement, index) => (
                            <HStack alignItems="flex-start">
                                • <Text size="2">{achievement}</Text>
                            </HStack>
                        ))}
                    </VStack>
                )}
            </VStack>
        </HStack>
    );
}
