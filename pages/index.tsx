import { PostPreview } from "../components/post-preview";
import { PageWrapper } from "../components/page-wrapper";

import { Container, Heading, Text, Stack } from "@chakra-ui/react";

export default function Home() {
    return (
        <PageWrapper>
            <Container>
                <Stack as={"section"} spacing={3} py={6}>
                    <Heading>Hi, I'm Oliver Lacek</Heading>
                    <Text>
                        I am a developer, an open source lover and writer from
                        Poland.
                    </Text>
                    <Text>
                        This is my digital garden, where I write about the
                        things I'm working on and share what I've learned.
                    </Text>
                </Stack>
                <Stack as={"section"} py={6} spacing={0}>
                    <Heading variant="section-title">Recent Posts</Heading>
                    <Stack spacing={4}>
                        <PostPreview />
                        <PostPreview />
                        <PostPreview />
                    </Stack>
                </Stack>
                <Stack as={"section"} py={6} spacing={0}>
                    <Heading variant="section-title">Sandbox</Heading>

                    <Stack spacing={4}>
                        <Text>
                            I usually go for the web platform when building out
                            projects, for myself and my clients. My weapons of
                            choice are React, TypeScript, Node.js and Next.js.
                        </Text>
                        <Text>
                            Here are some of the major personal projects I've
                            worked on:
                        </Text>
                    </Stack>
                </Stack>
                <Stack as={"section"} py={6} spacing={0}>
                    <Heading variant="section-title">About Me</Heading>

                    <Stack spacing={4}>
                        <Text>
                            I usually go for the web platform when building out
                            projects, for myself and my clients. My weapons of
                            choice are React, TypeScript, Node.js and Next.js.
                        </Text>
                        <Text>
                            Here are some of the major personal projects I've
                            worked on:
                        </Text>
                    </Stack>
                </Stack>
            </Container>
        </PageWrapper>
    );
}

export { getServerSiteProps } from "../components/chakra";
