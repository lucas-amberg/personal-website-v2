import {
    Dialog,
    Heading,
    Text,
    Skeleton,
    Separator,
    IconButton,
    Avatar,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { VStack, HStack } from "ss/jsx";
import { token } from "ss/tokens";
import { Suspense } from "react";
import { css } from "ss/css";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface OpenSourceItemProps {
    title: string;
    href?: string;
    repo?: string;
    startDate: string;
    endDate?: string;
    skills?: string[];
    description?: string;
    image: string;
    tasks?: string[];
    prs?: string;
    titleSize?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
}

export default function OpenSourceItem({
    title,
    href,
    repo,
    startDate,
    endDate,
    skills,
    description,
    image,
    tasks,
    titleSize,
    prs,
}: OpenSourceItemProps) {
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
                    flexDirection={{
                        base: "row",
                        xl: "column",
                    }}
                    alignItems="center">
                    <Suspense
                        fallback={
                            <Skeleton>
                                <Avatar
                                    size="8"
                                    src={image}
                                    alt={title}
                                    fallback={title.slice(0, 1).toUpperCase()}
                                />
                            </Skeleton>
                        }>
                        <Avatar
                            src={image}
                            size="8"
                            alt={title}
                            fallback={title.slice(0, 1).toUpperCase()}
                        />
                    </Suspense>
                    <Heading
                        size={titleSize || "6"}
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
                    <HStack>
                        <Avatar
                            src={image}
                            alt={title}
                            fallback={title.slice(0, 1).toUpperCase()}
                        />
                        <Dialog.Title size="7">{title}</Dialog.Title>
                    </HStack>
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
                                {href.slice(8)}
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
                                {repo.slice(8)}
                            </Link>
                        )}
                    </Text>
                    <Text>
                        <strong>PRs: </strong>
                        {!prs ? (
                            <em>No Public PRs Available</em>
                        ) : (
                            <Link
                                style={{
                                    color: token("colors.blue.10"),
                                    textDecoration: "underline",
                                }}
                                href={prs}
                                target="_blank">
                                View PRs
                            </Link>
                        )}
                    </Text>
                    {tasks && (
                        <VStack alignItems="flex-start">
                            <Separator size="4" />
                            <Text weight="bold">About my Contributions</Text>
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
