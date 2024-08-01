import { HStack, VStack } from "panda";
import { Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { SVGProps, ForwardRefExoticComponent, RefAttributes } from "react";

export interface ContactItemProps {
    image?: {
        src: string;
        alt: string;
    };
    Icon?: ForwardRefExoticComponent<
        Omit<SVGProps<SVGSVGElement>, "ref"> & {
            title?: string;
            titleId?: string;
        } & RefAttributes<SVGSVGElement>
    >;
    heading: string;
    subHeading?: string;
    href?: string;
    headingSize?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
    [key: string]: any;
}

export function ContactItem({
    image,
    Icon,
    heading,
    href,
    headingSize,
    subHeading,
    ...props
}: ContactItemProps) {
    return (
        <Link
            style={{
                width: "100%",
                height: "fit-content",
            }}
            href={href || "#"}>
            <HStack
                p={props.p || props.padding || "20px"}
                alignItems="center"
                justifyContent="flex-start"
                overflow="hidden"
                cursor={href ? "pointer" : "default"}
                width="full"
                borderRadius={props.borderRadius || "16px"}
                {...props}>
                {(image || Icon) && (
                    <VStack
                        width="15%"
                        alignItems="flex-start"
                        height="100%">
                        {image && (
                            <Image
                                style={{
                                    borderRadius: "10px",
                                }}
                                src={image.src}
                                alt={image.alt}
                                width={60}
                                height={60}
                            />
                        )}
                        {Icon && (
                            <Icon
                                width={60}
                                height={60}
                            />
                        )}
                    </VStack>
                )}
                <VStack
                    alignItems="flex-start"
                    justifyContent="center"
                    px="12px"
                    width={image || Icon ? "85%" : "100%"}>
                    <Heading
                        as="h3"
                        size={headingSize || "8"}>
                        {heading}
                    </Heading>
                    {subHeading && <Text>{subHeading}</Text>}
                </VStack>
            </HStack>
        </Link>
    );
}
