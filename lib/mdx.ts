import { serialize } from "next-mdx-remote/serialize";
import rt from "reading-time";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";

export const mdxToHtml = async (source: string) => {
    const { words: wordCount, text: readingTime } = rt(source);

    const mdxSource = await serialize(source, {
        mdxOptions: {
            rehypePlugins: [rehypeCodeTitles, rehypePrism],
            format: "mdx",
        },
    });

    return {
        wordCount,
        readingTime,
        html: mdxSource,
    };
};
