import Image from "next/image";
import { VStack } from "panda";
import { AboutMe } from "@/libs/sections/about-me/AboutMe";
import { Skills } from "@/libs/sections/skills/Skills";
import { Education } from "@/libs/sections/education/Education";
import { WorkExperience } from "@/libs/sections/work-experience/WorkExperience";
import { ContactForm } from "@/libs/sections/contact-form/ContactForm";
import { ProjectsView } from "@/libs/sections/projects/ProjectsView";
import { OpenSourceView } from "@/libs/sections/open-source/OpenSourceView";
import { Testimonials } from "@/libs/sections/testimonial/Testimonials";

export default function Home() {
    return (
        <VStack
            w="screen"
            px={{
                base: "20px",
                lg: "80px",
            }}
            py={{
                base: "20px",
                lg: "0px",
            }}
            gap="0"
            overflowX="hidden"
            height="full">
            <AboutMe />
            <Skills />
            <Education />
            <WorkExperience />
            <ProjectsView />
            <OpenSourceView />
            <Testimonials />
            <ContactForm />

            {process.env.NODE_ENV === "development" && (
                <VStack height="800vh">
                    {/* this is for testing screen height and scrolling things */}
                </VStack>
            )}
        </VStack>
    );
}
