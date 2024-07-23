import {
    Dialog,
    Heading,
    Text,
    Skeleton,
    Separator,
    IconButton,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { VStack, HStack } from "ss/jsx";
import { token } from "ss/tokens";
import { Suspense } from "react";
import { css } from "ss/css";
import { XMarkIcon } from "@heroicons/react/24/solid";

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
    tasks?: string[];
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
    tasks,
}: ProjectItemProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <VStack
                    cursor="pointer"
                    px={{
                        base: "20",
                        md: "0",
                    }}
                    width={{
                        base: "screen",
                        md: "auto",
                    }}
                    alignItems={{
                        base: "flex-start",
                        xl: "center",
                    }}>
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
            <Dialog.Content
                style={{
                    position: "relative",
                }}>
                <VStack
                    alignItems="flex-start"
                    width="full">
                    <HStack flexWrap="wrap">
                        {images.map((image, index) => (
                            <Image
                                style={{
                                    borderRadius: "16px",
                                }}
                                key={"image-" + index + 923982392}
                                src={image.src}
                                alt={image.alt}
                                width={250}
                                height={141}
                            />
                        ))}
                    </HStack>
                    <Dialog.Title size="7">{title}</Dialog.Title>
                    {description && (
                        <Dialog.Description>{description}</Dialog.Description>
                    )}
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
                    {tasks && (
                        <VStack alignItems="flex-start">
                            <Separator size="4" />
                            <Text weight="bold">About the Project</Text>
                            <ul>
                                {tasks.map((task, index) => {
                                    return (
                                        <li
                                            style={{
                                                display: "list-item",
                                                listStyleType: "disc",
                                                marginLeft: "1em",
                                            }}
                                            key={task + "-" + index}>
                                            {task}
                                        </li>
                                    );
                                })}
                            </ul>
                        </VStack>
                    )}
                </VStack>
                <Dialog.Close
                    style={{
                        position: "absolute",
                        top: "24px",
                        right: "16px",
                    }}>
                    <IconButton
                        variant="ghost"
                        color="red">
                        <XMarkIcon
                            width={20}
                            height={20}
                        />
                    </IconButton>
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Root>
    );
}
