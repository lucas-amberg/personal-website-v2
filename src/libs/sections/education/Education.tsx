"use client";
import { Box } from "ss/jsx";
import { DesktopEducationView } from "./DesktopEducationView";
import { MobileEducationView } from "./MobileEducationView";

export function Education() {
    return (
        <Box
            padding="0"
            overflow="hidden">
            <DesktopEducationView />
            <MobileEducationView />
        </Box>
    );
}
