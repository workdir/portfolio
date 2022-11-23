import { Box, Text, Heading, chakra, Flex, Mark } from "@chakra-ui/react";
import Image from "next/image";

const ProfileImage = chakra(Image, {
    baseStyle: { maxH: "64px", maxW: "64px", rounded: "full" },
    shouldForwardProp: (prop) =>
        [
            "width",
            "height",
            "src",
            "alt",
            "quality",
            "priority",
            "objectFit",
        ].includes(prop),
});

export default function Home() {
    return (
        <Box as="section">
            <Flex>
                <Box
                    mr={6}
                    p={1}
                    bg="red"
                    display="inline-block"
                    rounded="full"
                    bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
                >
                    <ProfileImage
                        src="/me.avif"
                        alt="oliver lacek"
                        width={64}
                        height={64}
                        quality={95}
                        priority={true}
                        objectFit={"cover"}
                        boxSize={"64"}
                    />
                </Box>
                <Box>
                    <Heading>Oliver</Heading>
                    <Text>
                        <Mark textDecoration="line-through">Junior</Mark>{" "}
                        Fronted developer
                    </Text>
                </Box>
            </Flex>

            <Text mt={6}>
                Welcome to my digital garden where I share what I'm learning
                about shipping great products, becoming a better developer and
                growing a career in tech.
            </Text>
        </Box>
    );
}
