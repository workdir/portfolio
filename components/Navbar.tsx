import NextLink from "next/link";
import { useRouter } from "next/router";
import ToggleThemeBtn from "./ToggleThemeBtn";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Logo from "./Logo";

import {
    Box,
    Container,
    Link,
    Flex,
    Stack,
    type LinkProps,
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

const MobileMenuButton = () => {
    return <div></div>;
};

export default function Nav() {
    const github = "https://github.com/workdir";
    const links = [
        { slug: "/projects", text: "Proejcts" },
        { slug: "/blog", text: "Blog" },
    ].map((link) => <LinkItem href={link.slug}>{link.text}</LinkItem>);

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
                    <ToggleThemeBtn />
                    <MobileMenuButton />
                </Flex>
            </Container>
        </Box>
    );
}
