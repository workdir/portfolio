import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export type PostMeta = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    readingTime: string;
};

export type Post = {
    content: MDXRemoteSerializeResult;
    meta: PostMeta;
};
