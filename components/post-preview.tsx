import NextLink from "next/link";
import { Stack, Box, Heading, Text } from "@chakra-ui/react";

interface Props {}

export const PostPreview = () => {
    return (
        <NextLink href="/blog">
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
                        New Year, New beginnings: Smashing Workshops & Audits
                    </Heading>
                    <Text>18 April 2021</Text>
                </Box>
                <Text>
                    How to trun 256 bits of entropy into a beautiflu,
                    avatar-rriendly circular SVG: the Hashvatar
                </Text>
            </Stack>
        </NextLink>
    );
};
