import { Box, Divider, Stack, IconButton, Text, Link } from "@chakra-ui/react";
import {
    GitHubLogoIcon,
    CodeSandboxLogoIcon,
    StackIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
    return (
        <>
            <Stack spacing={8} as={"footer"} my={"8"}>
                <Divider />
                <Text>
                    This website and was made with{" "}
                    {<Link href={"https://nextjs.org/"}>Next.js</Link>} and{" "}
                    {<Link href={"https://chakra-ui.com"}>ChakraUI</Link>},
                    check it on{" "}
                    {
                        <Link href={"https://github.com/workdir/portfolio"}>
                            Github
                        </Link>
                    }
                </Text>
                <Stack direction={["row"]} justify="center">
                    <IconButton
                        as={"a"}
                        href={"https://github.com/workdir"}
                        rounded="full"
                        variant={"ghost"}
                        aria-label={"github"}
                        icon={<GitHubLogoIcon />}
                    />
                    <IconButton
                        as={"a"}
                        href={"https://github.com/workdir"}
                        rounded="full"
                        variant={"ghost"}
                        aria-label={"codesandbox"}
                        icon={<CodeSandboxLogoIcon />}
                    />
                    <IconButton
                        as={"a"}
                        href={"https://github.com/workdir"}
                        rounded="full"
                        variant={"ghost"}
                        aria-label={"codepen"}
                        icon={<StackIcon />}
                    />
                </Stack>
                <Text textAlign={"center"}>Copyright &#169; 2022, Workdir</Text>
            </Stack>
        </>
    );
};

export default Footer;
