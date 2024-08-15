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
import { TestimonialItem } from "@/libs/ui/testimonial/TestimonialItem";

export function TestimonialView() {
    return (
        <HStack
            width="screen"
            position="relative"
            alignItems={{
                base: "flex-start",
                lg: "center",
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
                base: "flex-start",
                lg: "space-between",
            }}
            minHeight="50vh">
            <VStack
                alignItems="flex-start"
                justifyContent="center"
                height="100%"
                width={{
                    base: "full",
                    lg: "50%",
                }}>
                <Fade
                    triggerOnce
                    direction="up">
                    <Heading
                        as="h3"
                        className={css({
                            fontSize: {
                                base: "3rem",
                                lg: "4.5rem",
                            },
                            py: {
                                base: "5px",
                                lg: "20px",
                            },
                        })}>
                        Testimonials
                    </Heading>
                </Fade>
                <Text>Well, don't just listen to what I have to say..</Text>
                <Text
                    size="5"
                    style={{
                        color: token("colors.purple.9"),
                    }}>
                    here's a testimonial from someone I've worked with!
                </Text>
            </VStack>
            <VStack
                width={{
                    base: "100%",
                    lg: "50%",
                }}
                height="100%"
                alignItems="center"
                justifyContent="center">
                <TestimonialItem
                    image={{
                        src: "/images/ByronStuart.jpg",
                        alt: "Byron Stuart",
                    }}
                    heading="Byron Stuart"
                    companyName="Pluto TV"
                    position="Director of Software Engineering"
                    testimonial="Lucas is a very smart and talented software engineer. Even though his internship at Pluto TV was his first real world work experience and he is only half way through this Bachelors of Computer Science degree and has most of the core CS classes still to be taken in the next couple of years, he was able to jump in and directly contribute to building the Pluto TV app. He is a self starter, motivated and a quick learner. He was able to ramp up on our tech stack and codebase very quickly and complete work that a typical software engineer would do, which was very impressive for someone in such an early career stage. I highly recommend Lucas to any company that is looking to hire an entry level software engineer or intern. After Lucas graduates from university, I expect he will be an excellent software engineer with a great career ahead of him."
                />
            </VStack>
        </HStack>
    );
}
