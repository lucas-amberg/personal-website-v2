import { VStack, HStack } from "panda";
import { Heading, Text } from "@radix-ui/themes";
import { Fade, Rotate } from "react-awesome-reveal";
import Image from "next/image";
import { token } from "ss/tokens";
import { ContactItem } from "@/libs/ui/contact-form/ContactItem";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

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
                base: "row",
                lg: "column",
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
        </HStack>
    );
}
