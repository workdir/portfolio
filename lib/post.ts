import fs from "fs";
import matter from "gray-matter";
import { z } from "zod";

const PostSchema = z.object({
    slug: z.string(),
    title: z.string(),
    date: z.date().transform((arg) => arg.toString()),
    excerpt: z.string(),
    content: z.string(),
});

export type Post = z.infer<typeof PostSchema>;

const POSTS_PATH = `${process.cwd()}/content/posts`;

export const getSlugs = () => {
    const fileNames = fs.readdirSync(POSTS_PATH, "utf-8");
    const slugs = fileNames.map((fileName) => fileName.split(".")[0]);

    return slugs;
};

export const getPostBySlug = (slug: string) => {
    const file = fs.readFileSync(`${POSTS_PATH}/${slug}.mdx`, "utf-8");
    const { data, content } = matter(file);
    const post = PostSchema.parse({ ...data, content, slug });

    return post;
};

export const getPosts = () => {
    return getSlugs().map(getPostBySlug);
};
