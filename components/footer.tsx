import { Divider, Stack, IconButton, Text, Link } from "@chakra-ui/react";
import {
    GitHubLogoIcon,
    CodeSandboxLogoIcon,
    StackIcon,
} from "@radix-ui/react-icons";
import { Container } from "@chakra-ui/react";

const Footer = () => {
    return (
        <footer>
            <Container>
                <Stack spacing={8} my={"8"}>
                    <Divider />
                    <Text textAlign={"center"}>
                        This website was made with{" "}
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
                    <Text textAlign={"center"}>
                        Copyright &#169; 2022, Workdir
                    </Text>
                </Stack>
            </Container>
        </footer>
    );
};

export default Footer;
