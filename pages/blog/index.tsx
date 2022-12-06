import { type GetStaticProps } from "next";
import NextLink from "next/link";
import { Container } from "@chakra-ui/react";
import { PageWrapper } from "../../components/page-wrapper";

interface Props {
    slugs: string[];
}

export default function Blog({ slugs }: Props) {
    const formatTitle = (slug: string) => slug.replace("-", " ");

    return (
        <PageWrapper>
            <Container>
                {slugs.map((slug) => (
                    <NextLink key={slug} href={`/blog/${slug}`}>
                        {formatTitle(slug)}
                    </NextLink>
                ))}
            </Container>
        </PageWrapper>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    return { props: {} };
};
