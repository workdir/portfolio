import { type Post } from "../lib/post";
import NextLink from "next/link";
import { Stack, Box, Heading, Text } from "@chakra-ui/react";

interface Props {
    post: Omit<Post, "content">;
}

export const PostPreview = ({ post }: Props) => {
    return (
        <NextLink href={`/blog/${post.slug}`}>
            <Stack
                as={"article"}
                spacing={4}
                p={4}
                borderWidth={"1px"}
                rounded={"md"}
                _hover={{
                    textDecoration: "none",
                    shadow: "lg",
                }}
            >
                <Box>
                    <Heading variant={"post-preview"} mb={1}>
                        {post.title}
                    </Heading>
                    <Text>{post.date}</Text>
                </Box>
                <Text>{post.excerpt}</Text>
            </Stack>
        </NextLink>
    );
};
