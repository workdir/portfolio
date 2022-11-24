import Layout from "../layout/article";
import Section from "../components/Section";
import { Heading } from "@chakra-ui/react";

const Projects = () => {
    return (
        <Layout title="Projects">
            <Section delay={0.3}>
                <Heading variant="section-title">Projects</Heading>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quas doloribus tenetur porro vitae ut neque, quaerat,
                    repudiandae, doloremque et animi debitis reprehenderit ipsum
                    excepturi expedita voluptatibus quod! Aut, aperiam velit?
                </p>
            </Section>
        </Layout>
    );
};

export default Projects;
