import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import { getSlugs, getPostBySlug } from "../../lib/post";

import { Container } from "@chakra-ui/react";
import { MDXComponents } from "../../components/mdx-components";
import { PageWrapper } from "../../components/page-wrapper";

interface Props {
    mdxSource: MDXRemoteSerializeResult;
}

const Post = ({ mdxSource }: Props) => {
    return (
        <>
            <Head>
                {mdxSource.frontmatter?.title && (
                    <title>{mdxSource.frontmatter.title}</title>
                )}
            </Head>
            <PageWrapper>
                <Container>
                    <MDXRemote {...mdxSource} components={MDXComponents} />
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
    const source = getPostBySlug(params?.slug as string);

    if (!source) {
        return {
            notFound: true,
        };
    }

    const mdxSource = await serialize(source, { parseFrontmatter: true });
    return {
        props: {
            mdxSource,
        },
    };
};

export default Post;
