import { Heading } from "@chakra-ui/react";

import type { MDXRemoteProps } from "next-mdx-remote";

type TMDXComponents = MDXRemoteProps["components"];

export const MDXComponents: TMDXComponents = {
    h1: Heading,
};
