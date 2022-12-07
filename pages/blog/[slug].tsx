import type { Post } from "../../lib/post";
import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXComponents } from "../../components/mdx-components";
import { mdxToHtml } from "../../lib/mdx";

import { getSlugs, getPostBySlug } from "../../lib/post";

import { Container } from "@chakra-ui/react";
import { PageWrapper } from "../../components/page-wrapper";

interface Props extends Omit<Post, "content"> {
    content: MDXRemoteSerializeResult;
}

const Post = ({ content, title }: Props) => {
    return (
        <>
            <Head>{title}</Head>
            <link href="themes/prism-ghcolors.css" rel="stylesheet" />
            <PageWrapper>
                <Container>
                    <MDXRemote {...content} components={MDXComponents} />
                </Container>
            </PageWrapper>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = getSlugs().map((slug) => ({ params: { slug } }));
    return { paths: slugs, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = getPostBySlug(params?.slug as string);

    if (!post) {
        return {
            notFound: true,
        };
    }

    const { html, ...rest } = await mdxToHtml(post.content);

    return {
        props: {
            ...post,
            ...rest,
            content: html,
        },
    };
};

export default Post;
