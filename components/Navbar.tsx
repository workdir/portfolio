import { useState } from "react";
import ReactDom from "react-dom";
import NextLink from "next/link";
import { useRouter } from "next/router";
import ToggleThemeBtn from "./ToggleThemeBtn";
import {
    GitHubLogoIcon,
    HamburgerMenuIcon,
    Cross1Icon,
} from "@radix-ui/react-icons";
import Logo from "./Logo";

import {
    Box,
    Container,
    Link,
    Flex,
    Stack,
    type LinkProps,
    IconButton,
} from "@chakra-ui/react";

interface LinkItemProps extends LinkProps {
    href: string;
}

const LinkItem = ({ href, children, ...props }: LinkItemProps) => {
    const router = useRouter();
    const isActive = href === router.asPath;

    return (
        <NextLink href={href}>
            <Link
                as="span"
                p={2}
                bg={isActive ? "grassTeal" : undefined}
                color={isActive ? "#202034" : undefined}
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    );
};

const MobileMenuButton = ({
    cb,
    isOpen,
}: {
    isOpen: boolean;
    cb: () => void;
}) => {
    const icon = isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />;
    return (
        <IconButton
            display={{ sm: "inline-flex", md: "none" }}
            ml={1}
            aria-label="toggle menu"
            icon={icon}
            onClick={cb}
        />
    );
};

const MobileMenu = ({ children }: { children: React.ReactNode }) => {
    return ReactDom.createPortal(
        <Stack minH="100vh" position="fixed" top="0" left="0" w="full">
            {children}
        </Stack>,
        document.getElementById("__next") as HTMLDivElement
    );
};

export default function Nav() {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const toggleNav = () => {
        setIsNavOpen((s) => !s);
    };
    const github = "https://github.com/workdir";
    const links = [
        { slug: "/projects", text: "Proejcts" },
        { slug: "/blog", text: "Blog" },
    ].map((link) => (
        <LinkItem key={link.slug} href={link.slug}>
            {link.text}
        </LinkItem>
    ));

    return (
        <Box as="nav">
            <Container maxW="md" py={2}>
                <Flex justify="space-between" align="center" wrap="wrap">
                    <NextLink href="/">
                        <Box w="24px">
                            <Logo />
                        </Box>
                    </NextLink>
                    <Stack
                        direction={["row"]}
                        flexGrow={1}
                        ml={5}
                        display={{ base: "none", md: "flex" }}
                    >
                        {links}
                    </Stack>
                    <Box>
                        <ToggleThemeBtn />
                        <MobileMenuButton isOpen={isNavOpen} cb={toggleNav} />
                        {isNavOpen && <MobileMenu>{links}</MobileMenu>}
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}
