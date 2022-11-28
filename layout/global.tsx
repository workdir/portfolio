import { MDXProvider } from "@mdx-js/react";
import { Box, Container, Text } from "@chakra-ui/react";
import Footer from "../components/footer";
import Menu from "../components/menu";

interface Props {
    children: React.ReactNode;
}

const components = {
    p: Text,
};

const Main = ({ children }: Props) => {
    return (
        <Box>
            <Menu />
            <Container>
                <MDXProvider components={components}>{children}</MDXProvider>
                <Footer />
            </Container>
        </Box>
    );
};

export default Main;
