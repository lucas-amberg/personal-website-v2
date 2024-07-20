import { VStack, HStack } from "panda";
import { Heading, Text, TextArea, TextField } from "@radix-ui/themes";
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

export function ContactFormView() {
    return (
        <HStack
            width="screen"
            position="relative"
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
            height="screen">
            <VStack
                alignItems="flex-start"
                width={{
                    base: "full",
                    lg: "50%",
                }}>
                <Fade
                    triggerOnce
                    direction="up">
                    <Heading size={"9"}>Contact Me</Heading>
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
                    Additionally, you may use the contact form to the right to
                    reach me by email.
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
                <VStack
                    alignItems="flex-start"
                    gap="12">
                    <label htmlFor="name">
                        <Text>
                            Name <span style={{ color: "red" }}>*</span>
                        </Text>
                        <TextField.Root
                            required
                            id="name"
                            type="text"
                            name="name"
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
                    <label htmlFor="email">
                        <Text>
                            Email <span style={{ color: "red" }}>*</span>
                        </Text>
                        <TextField.Root
                            required
                            id="email"
                            type="email"
                            name="email"
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
                    <label htmlFor="phone">
                        <Text>Phone Number</Text>
                        <TextField.Root
                            id="phone"
                            maxLength={10}
                            type="number"
                            name="phone"
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
                    <label htmlFor="reason">
                        <Text>
                            Reason for Contacting{" "}
                            <span style={{ color: "red" }}>*</span>
                        </Text>
                        <TextArea
                            required
                            id="reason"
                            resize={"none"}
                            name="reason"
                            size="3"
                            variant="classic"
                            placeholder="I am reaching out because..."></TextArea>
                    </label>
                </VStack>
            </VStack>
        </HStack>
    );
}
