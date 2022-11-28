import type { Route } from "./types/route";
import Link from "next/link";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Box,
    Link as ChakraLink,
    type BoxProps,
} from "@chakra-ui/react";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

interface Props extends BoxProps {
    routes: Route[];
}

const MobileMenu = ({ routes, ...props }: Props) => {
    const items = routes.map((route) => {
        return (
            <Link key={route.slug} href={route.slug}>
                <MenuItem key={route.slug}>{route.text}</MenuItem>
            </Link>
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

export default MobileMenu;
