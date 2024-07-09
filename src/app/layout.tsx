import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/libs/utility/Providers/Providers";
import { Box } from "panda";

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--inter-font",
});

export const metadata: Metadata = {
    title: "Lucas Amberg",
    description: "Lucas Amberg's Portfolio Site",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                style={{ overflowX: "hidden" }}
                className={`${inter.variable}`}>
                <Providers>
                    <Box
                        scrollbarWidth={"none"}
                        width="screen"
                        padding="0"
                        minHeight="screen"
                        overflowX="hidden">
                        {children}
                    </Box>
                </Providers>
            </body>
        </html>
    );
}
