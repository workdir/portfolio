import type { Route } from "./types/route";
import NextLink from "next/link";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Box,
    type BoxProps,
} from "@chakra-ui/react";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

interface Props extends BoxProps {
    routes: Route[];
}

export const MobileMenu = ({ routes, ...props }: Props) => {
    const items = routes.map((route) => {
        return (
            <NextLink key={route.slug} href={route.slug}>
                <MenuItem key={route.slug}>{route.label}</MenuItem>
            </NextLink>
        );
    });
    return (
        <Box {...props}>
            <Menu>
                {({ isOpen }) => (
                    <>
                        <MenuButton
                            as={IconButton}
                            rounded={"full"}
                            icon={
                                isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />
                            }
                        />
                        <MenuList>{items}</MenuList>
                    </>
                )}
            </Menu>
        </Box>
    );
};
