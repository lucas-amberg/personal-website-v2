import Image from "next/image";
import { VStack } from "panda";
import { AboutMe } from "@/libs/sections/about-me/AboutMe";

export default function Home() {
    return (
        <VStack
            w="screen"
            px="80px"
            height="full">
            <AboutMe />
        </VStack>
    );
}
