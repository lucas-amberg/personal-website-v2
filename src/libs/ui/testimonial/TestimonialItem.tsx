"use client";
import { HStack, VStack } from "ss/jsx";
import Image from "next/image";
import { Heading, Text } from "@radix-ui/themes";

export interface TestimonialItemProps {
    image: {
        src: string;
        alt: string;
    };
    heading: string;
    companyName?: string;
    position?: string;
    headingSize?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
    testimonial: string;
    [key: string]: any;
}

export function TestimonialItem({
    image,
    heading,
    headingSize,
    testimonial,
    companyName,
    position,
    ...props
}: TestimonialItemProps) {
    return (
        <HStack
            p={props.p || props.padding || "0px"}
            alignItems="flex-start"
            justifyContent="flex-start"
            overflow="hidden"
            borderRadius={props.borderRadius || "16px"}
            {...props}>
            <VStack
                gap="4"
                width="85%"
                alignItems="flex-start">
                <HStack>
                    <Image
                        style={{
                            borderRadius: "10px",
                        }}
                        src={image.src}
                        alt={image.alt}
                        width={60}
                        height={60}
                    />
                    <VStack
                        w="full"
                        alignItems="start">
                        <Heading
                            as="h3"
                            size={headingSize || "8"}>
                            {heading}
                        </Heading>
                        {(companyName || position) && (
                            <Text weight="bold">
                                {companyName && position
                                    ? position + ", " + companyName
                                    : companyName && !position
                                      ? companyName
                                      : position}
                            </Text>
                        )}
                    </VStack>
                </HStack>
                <Text
                    size="8"
                    style={{ fontFamily: "times" }}
                    weight="bold">
                    “
                </Text>
                <Text size="3">{testimonial}</Text>
                <Text
                    size="8"
                    weight="bold"
                    style={{ marginLeft: "auto", fontFamily: "times" }}>
                    ”
                </Text>
            </VStack>
        </HStack>
    );
}
