import { VStack, HStack } from "panda";
import { Heading } from "@radix-ui/themes";

export function DesktopSkillsView() {
    return (
        <VStack
            width="screen"
            position="relative"
            alignItems="center"
            p="90px"
            justifyContent="center"
            height="screen"
            bg="gray.12">
            <HStack
                width="50%"
                marginLeft="auto"
                height="100%">
                <Heading size="9">Technical Skills</Heading>
            </HStack>
        </VStack>
    );
}
