import { Container, Stack } from "@chakra-ui/react";

/** custom */
import DesktopMenu from "./desktop-menu";
import ThemeToggler from "../theme-togger";

/** icons */

import { RocketIcon, KeyboardIcon, SlashIcon } from "@radix-ui/react-icons";
import MobileMenu from "./mobile-menu";

const routes = [
    {
        slug: "/",
        text: "Home.",
        icon: <SlashIcon />,
    },
    {
        slug: "/blog",
        text: "Blog.",
        icon: <KeyboardIcon />,
    },
    {
        slug: "/sandbox",
        text: "Sandbox.",
        icon: <RocketIcon />,
    },
];

const Menu = () => {
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
};

export default Menu;
