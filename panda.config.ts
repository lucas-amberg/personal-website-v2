import { defineConfig } from "@pandacss/dev";
import radixColorsPreset from "pandacss-preset-radix-colors";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    presets: ["@pandacss/preset-base", radixColorsPreset()],
    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

    // Files to exclude
    exclude: [],
    prefix: "panda",
    layers: {
        reset: "panda_reset",
        base: "panda_base",
        tokens: "panda_tokens",
        recipes: "panda_recipes",
        utilities: "panda_utilities",
    },

    // Useful for theme customization
    theme: {
        extend: {
            tokens: {
                fonts: {
                    // add fonts later
                },
            },
            breakpoints: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px'
            }
        },
    },

    jsxFramework: "react",
    // The output directory for your css system
    outdir: "styled-system",
});
