import { Dialog, Heading, Text, Skeleton } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { VStack, HStack } from "ss/jsx";
import { token } from "ss/tokens";
import { Suspense } from "react";
import { css } from "ss/css";

interface ProjectItemProps {
    title: string;
    href?: string;
    repo?: string;
    startDate: string;
    endDate?: string;
    skills?: string[];
    description?: string;
    images: {
        src: string;
        alt: string;
    }[];
}

export default function ProjectItem({
    title,
    href,
    repo,
    startDate,
    endDate,
    skills,
    description,
    images,
}: ProjectItemProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <VStack cursor="pointer">
                    <Suspense
                        fallback={
                            <Skeleton>
                                <Image
                                    style={{
                                        borderRadius: "16px",
                                    }}
                                    src={images[0].src}
                                    alt={images[0].alt}
                                    width={250}
                                    height={141}
                                />
                            </Skeleton>
                        }>
                        <Image
                            style={{
                                borderRadius: "16px",
                            }}
                            src={images[0].src}
                            alt={images[0].alt}
                            width={250}
                            height={141}
                        />
                    </Suspense>
                    <Heading
                        className={css({
                            _hover: {
                                color: "blue.8",
                            },
                        })}>
                        {title}
                    </Heading>
                </VStack>
            </Dialog.Trigger>
            <Dialog.Content>
                <VStack
                    alignItems="flex-start"
                    width="full">
                    <HStack flexWrap="wrap">
                        {images.map((image, index) => (
                            <Image
                                key={"image-" + index + 923982392}
                                src={image.src}
                                alt={image.alt}
                                width={250}
                                height={141}
                            />
                        ))}
                    </HStack>
                    <Heading size="7">{title}</Heading>
                    {description && <Text>{description}</Text>}
                    {startDate && (
                        <Text>
                            {!endDate
                                ? startDate
                                : endDate === startDate
                                  ? startDate
                                  : startDate + " - " + endDate}
                        </Text>
                    )}
                    {skills && (
                        <Text>
                            <strong>Skills Used: </strong>
                            {skills.map((skill, index) => {
                                return index === skills.length - 1
                                    ? skill
                                    : skill + ", ";
                            })}
                        </Text>
                    )}
                    <Text>
                        <strong>Project Link: </strong>
                        {!href ? (
                            <em>Currently Unreleased</em>
                        ) : (
                            <Link
                                style={{
                                    color: token("colors.blue.10"),
                                    textDecoration: "underline",
                                }}
                                href={href}
                                target="_blank">
                                {href.slice(7)}
                            </Link>
                        )}
                    </Text>
                    <Text>
                        <strong>Repo Link: </strong>
                        {!repo ? (
                            <em>Private</em>
                        ) : (
                            <Link
                                style={{
                                    color: token("colors.blue.10"),
                                    textDecoration: "underline",
                                }}
                                href={repo}
                                target="_blank">
                                {repo.slice(7)}
                            </Link>
                        )}
                    </Text>
                </VStack>
            </Dialog.Content>
        </Dialog.Root>
    );
}
