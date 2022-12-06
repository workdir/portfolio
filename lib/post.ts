import fs from "fs";
const POSTS_PATH = `${process.cwd()}/content/posts`;
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = nextConfig;

export const getSlugs = () => {
    const fileNames = fs.readdirSync(POSTS_PATH, "utf-8");
    const slugs = fileNames.map((file) => file.replace(".mdx", ""));
    return slugs;
};

export const getPostBySlug = (slug: string) => {
    return "";
};

export const getPosts = () => {};
