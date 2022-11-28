import { Heading } from "@chakra-ui/react";
import Layout from "../layout/nested";
export default function Home() {
    return (
        <Layout title="Oliver, Developer and writer">
            <Heading>Recent Pots</Heading>
        </Layout>
    );
}

export { getServerSiteProps } from "../components/chakra";
