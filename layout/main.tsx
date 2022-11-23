import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface Props {
    children: React.ReactNode;
}

const Main = ({ children }: Props) => {
    return (
        <Box>
            <Navbar />
            <Container maxW="md">
                {children}
                <Footer />
            </Container>
        </Box>
    );
};

export default Main;
