import emailjs from "@emailjs/browser";
import { RefObject } from "react";

export const sendEmail = async (form: RefObject<HTMLFormElement>) => {
    if (!form || !form.current) {
        return {
            message:
                "Error sending email: Form reference is not defined, please refresh and try again",
            error: true,
        };
    }
    console.log(form.current)
    return await emailjs
        .sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID_EMAIL!,
            process.env.NEXT_PUBLIC_TEMPLATE_ID_EMAIL!,
            form.current,
            {
                publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY_EMAIL!,
            },
        )
        .then(
            () => {
                return { message: "Email sent successfully!", error: false };
            },
            (error) => {
                console.log("Error sending email:", error);
                return {
                    message: "Error sending email: " + error.text,
                    error: true,
                };
            },
        );
};
