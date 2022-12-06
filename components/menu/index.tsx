import { Container, Stack } from "@chakra-ui/react";

/** custom */
import { DesktopMenu } from "./desktop-menu";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggler } from "../theme-togger";

/** icons */

import { RocketIcon, KeyboardIcon, SlashIcon } from "@radix-ui/react-icons";

const routes = [
    {
        slug: "/",
        label: "Home.",
        icon: <SlashIcon />,
    },
    {
        slug: "/blog",
        label: "Blog.",
        icon: <KeyboardIcon />,
    },
    {
        slug: "/sandbox",
        label: "Sandbox.",
        icon: <RocketIcon />,
    },
];

export default function Menu() {
    return (
        <header>
            <Container>
                <Stack
                    as={"nav"}
                    direction={["row-reverse", "row"]}
                    spacing={6}
                    justify={"space-between"}
                    align={"center"}
                    py={8}
                >
                    <DesktopMenu
                        display={{ sm: "flex", base: "none" }}
                        routes={routes}
                    />
                    <MobileMenu
                        display={{ sm: "none", base: "flex" }}
                        routes={routes}
                    />
                    <ThemeToggler />
                </Stack>
            </Container>
        </header>
    );
}
