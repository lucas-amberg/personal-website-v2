"use client";
import { VStack, HStack } from "panda";
import {
    Heading,
    Text,
    TextArea,
    TextField,
    Button,
    Spinner,
} from "@radix-ui/themes";
import { Fade, Rotate } from "react-awesome-reveal";
import Image from "next/image";
import { token } from "ss/tokens";
import { ContactItem } from "@/libs/ui/contact-form/ContactItem";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import {
    PhoneIcon,
    UserIcon,
    EnvelopeIcon as EnvelopeIconOutline,
} from "@heroicons/react/24/outline";
import { useState, useRef, FormEvent } from "react";
import { sendEmail } from "@/libs/utility/functions/sendEmail";
import { css } from "ss/css";

export function ContactFormView() {
    const form = useRef<HTMLFormElement>(null);
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleFormSubmit = async () => {
        setLoading(true);
        const result = await sendEmail(form);
        setMessage(result.message);
        if (!result.error) {
            form.current?.reset();
        }
        setLoading(false);
    };

    return (
        <HStack
            width="screen"
            position="relative"
            bg="gray.12"
            alignItems={{
                base: "center",
                lg: "flex-start",
            }}
            p={{
                base: "20px",
                lg: "90px",
            }}
            flexDirection={{
                base: "column",
                lg: "row",
            }}
            justifyContent={{
                base: "center",
                lg: "space-between",
            }}
            minHeight="screen">
            <VStack
                alignItems="flex-start"
                width={{
                    base: "full",
                    lg: "50%",
                }}>
                <Fade
                    triggerOnce
                    direction="up">
                    <Heading
                        as="h3"
                        size={"9"}>
                        Contact Me
                    </Heading>
                </Fade>
                <Text>
                    I am always open to conversations about tech, project
                    proposals, contracts, job opportunities,{" "}
                </Text>
                <Text
                    size="5"
                    style={{
                        color: token("colors.purple.9"),
                    }}>
                    or anything involving Software Engineering.
                </Text>
                <Text>
                    If you'd like to reach me,{" "}
                    <span style={{ color: token("colors.blue.8") }}>
                        feel free to reach out
                    </span>{" "}
                    using my email, or other social media/contact info below.
                </Text>
                <Text>
                    Additionally, you may use the contact form in this section
                    to reach me by email.
                </Text>
                <ContactItem
                    backgroundColor="green.8"
                    subHeading={"lucasamberg@icloud.com"}
                    heading="Email"
                    Icon={EnvelopeIcon}
                    href="mailto:lucasamberg@icloud.com"
                />
                <ContactItem
                    backgroundColor="#24292e"
                    subHeading={"lucas-amberg"}
                    heading="GitHub"
                    image={{ src: "/logos/github.png", alt: "GitHub" }}
                    href="https://github.com/lucas-amberg"
                />
                <ContactItem
                    backgroundColor="#3064bc"
                    subHeading={"in/lucasamberg"}
                    heading="LinkedIn"
                    image={{ src: "/logos/linkedin.svg", alt: "LinkedIn" }}
                    href="https://linkedin.com/in/lucasamberg"
                />
            </VStack>
            <VStack
                width={{
                    base: "100%",
                    lg: "50%",
                }}
                height="100%"
                alignItems="center"
                justifyContent="center">
                <form
                    className={css({
                        paddingY: {
                            base: "20px",
                            lg: "0",
                        },
                        gap: "12px",
                        justifyContent: {
                            base: "center",
                            lg: "flex-end",
                        },
                        height: "100%",
                        width: "100%",
                        alignItems: "center",
                        display: "grid",
                        gridTemplateRows: "1fr 1fr 1fr 2fr 1fr",
                    })}
                    ref={form}
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleFormSubmit();
                    }}>
                    <label htmlFor="user_name">
                        <Text>
                            Name <span style={{ color: "red" }}>*</span>
                        </Text>
                        <TextField.Root
                            required
                            id="user_name"
                            type="text"
                            name="user_name"
                            size="3"
                            variant="classic"
                            placeholder="John Doe">
                            <TextField.Slot>
                                <UserIcon
                                    width={12}
                                    height={12}
                                />
                            </TextField.Slot>
                        </TextField.Root>
                    </label>
                    <label htmlFor="user_email">
                        <Text>
                            Email <span style={{ color: "red" }}>*</span>
                        </Text>
                        <TextField.Root
                            required
                            id="user_email"
                            type="email"
                            name="user_email"
                            size="3"
                            variant="classic"
                            placeholder="john.doe@example.com">
                            <TextField.Slot>
                                <EnvelopeIconOutline
                                    width={12}
                                    height={12}
                                />
                            </TextField.Slot>
                        </TextField.Root>
                    </label>
                    <label htmlFor="user_phone">
                        <Text>Phone Number</Text>
                        <TextField.Root
                            id="user_phone"
                            maxLength={10}
                            type="number"
                            name="user_phone"
                            size="3"
                            variant="classic"
                            placeholder="1234567890">
                            <TextField.Slot>
                                <PhoneIcon
                                    width={12}
                                    height={12}
                                />
                            </TextField.Slot>
                        </TextField.Root>
                    </label>
                    <label htmlFor="message">
                        <Text>
                            Message <span style={{ color: "red" }}>*</span>
                        </Text>
                        <TextArea
                            required
                            id="message"
                            resize={"none"}
                            name="message"
                            size="3"
                            variant="classic"
                            placeholder="I am reaching out because..."></TextArea>
                    </label>
                    {message && (
                        <Text
                            color={
                                message.startsWith("Error") ? "red" : "green"
                            }>
                            {message}
                        </Text>
                    )}
                    <Button
                        type="submit"
                        disabled={loading}
                        size="4"
                        onClick={(e) => {
                            e.preventDefault();
                            handleFormSubmit();
                        }}>
                        {loading ? <Spinner size="3" /> : "Send"}
                    </Button>
                </form>
            </VStack>
        </HStack>
    );
}
