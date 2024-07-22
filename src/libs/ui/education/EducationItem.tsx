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
    degree?: string;
    headingSize?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
    timeframe: string;
    gpa?: string;
    honors?: {
        honor: string;
        terms?: string[];
    }[];
    relevantCoursework?: string[];
    clubs?: string[];
    description?: string;
    [key: string]: any;
}

export function EducationItem({
    image,
    heading,
    headingSize,
    timeframe,
    gpa,
    honors,
    relevantCoursework,
    clubs,
    description,
    degree,
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
                width="15%"
                alignItems="flex-start"
                height="100%">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={60}
                    height={60}
                />
            </VStack>
            <VStack
                gap="0"
                width="85%"
                alignItems="flex-start">
                <Heading size={headingSize || "8"}>{heading}</Heading>
                {degree && <Text weight="bold">{degree}</Text>}
                <Text weight={"bold"}>{timeframe}</Text>
                {gpa && (
                    <Text>
                        <span style={{ fontWeight: "bold" }}>GPA</span>: {gpa}
                    </Text>
                )}
                {honors &&
                    honors.map((honor, index) => {
                        return (
                            <Text key={honor + "-" + index}>
                                <span style={{ fontWeight: "bold" }}>
                                    {honor.honor}
                                </span>
                                {honor.terms &&
                                    ": " +
                                        honor.terms.map((term, index) => {
                                            return index + 1 ===
                                                honor.terms!.length
                                                ? " " + term
                                                : term;
                                        })}
                            </Text>
                        );
                    })}
                {relevantCoursework && (
                    <Text>
                        <span style={{ fontWeight: "bold" }}>
                            Relevant Coursework
                        </span>
                        : {relevantCoursework.map((course) => course)}
                    </Text>
                )}
                {clubs && (
                    <Text>
                        <span style={{ fontWeight: "bold" }}>
                            Clubs and Societies
                        </span>
                        :{" "}
                        {clubs.map((club, index) => {
                            return index + 1 === clubs.length
                                ? club
                                : club + ", ";
                        })}
                    </Text>
                )}
                {description && <Text>{description}</Text>}
            </VStack>
        </HStack>
    );
}
