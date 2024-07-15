import { Theme } from "@radix-ui/themes";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Theme
            appearance="dark"
            accentColor="purple"
            panelBackground="solid"
            radius="large"
            scaling="105%">
            {children}
        </Theme>
    );
}
