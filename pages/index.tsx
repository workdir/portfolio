import Link from "next/link";
import { RoughNotation } from "react-rough-notation";
import { Box, Text, Heading, chakra, Flex, Mark } from "@chakra-ui/react";
import Section from "../components/Section";
import Image from "next/image";
import Layout from "../layout/article";

const ProfileImage = chakra(Image, {
    baseStyle: { maxH: "64px", maxW: "64px", rounded: "full" },
    shouldForwardProp: (prop) =>
        ["width", "height", "src", "alt", "quality", "priority"].includes(prop),
});

export default function Home() {
    return (
        <Layout title="Workdir, How i see code">
            <Section delay={0.3}>
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
                            <RoughNotation
                                type="crossed-off"
                                color="#FFC857"
                                show={true}
                                animationDelay={2000}
                            >
                                Junior
                            </RoughNotation>{" "}
                            Fronted Developer
                        </Text>
                    </Box>
                </Flex>
                <Text mt={6}>
                    Welcome to my digital garden where I share what I'm learning
                    about shipping great products, becoming a better developer
                    and growing a career in tech.
                </Text>
            </Section>

            <Section delay={0.3}>
                <Heading variant="section-heading">Wrok</Heading>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam efficitur massa nec interdum varius. Donec sit amet
                    enim non nisl dapibus semper vitae in sem. Nunc enim turpis,
                    egestas eu molestie vestibulum, pharetra ut velit. Nulla sed
                    augue placerat, posuere nunc non, fringilla turpis. Cras ac
                    consequat odio. Praesent blandit lorem vel tortor dictum
                    volutpat. Ut et nisl vel lectus bibendum placerat. Curabitur
                    vel blandit diam, id ultrices magna. Donec dignissim quis
                    augue non ultrices. Quisque sem lacus, pulvinar id nisl
                    quis, vulputate lobortis augue.
                </Text>
                <Link href="">SANDX</Link>
            </Section>
            <Section delay={0.6}>
                <Heading variant="section-heading">Bio</Heading>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam efficitur massa nec interdum varius. Donec sit amet
                    enim non nisl dapibus semper vitae in sem. Nunc enim turpis,
                    egestas eu molestie vestibulum, pharetra ut velit. Nulla sed
                    augue placerat, posuere nunc non, fringilla turpis. Cras ac
                    consequat odio. Praesent blandit lorem vel tortor dictum
                    volutpat. Ut et nisl vel lectus bibendum placerat. Curabitur
                    vel blandit diam, id ultrices magna. Donec dignissim quis
                    augue non ultrices. Quisque sem lacus, pulvinar id nisl
                    quis, vulputate lobortis augue.
                </Text>
                <Link href="">SANDX</Link>
            </Section>
        </Layout>
    );
}

export { getServerSiteProps } from "../components/Chakra";
