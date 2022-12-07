import type { GetStaticProps } from "next";
import NextLink from "next/link";
import { Container } from "@chakra-ui/react";
import { PageWrapper } from "../../components/page-wrapper";
import { getPosts, type Post } from "../../lib/post";
import { PostPreview } from "../../components/post-preview";

interface Props {
    posts: Omit<Post, "content">[];
}
export default function Blog({ posts }: Props) {
    return (
        <PageWrapper>
            <Container>
                <h1>App Posts</h1>
                {posts.map((post) => (
                    <PostPreview key={post.slug} post={post} />
                ))}
            </Container>
        </PageWrapper>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = getPosts();
    return { props: { posts } };
};
