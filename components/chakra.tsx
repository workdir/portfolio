import { type GetServerSideProps } from "next";
import {
    ChakraProvider,
    cookieStorageManagerSSR,
    localStorageManager,
} from "@chakra-ui/react";
import { theme } from "../styles/theme";

interface Props {
    cookies: string;
    children: React.ReactNode;
}

export const Chakra = ({ cookies, children }: Props) => {
    const colorModeManager =
        typeof cookies === "string"
            ? cookieStorageManagerSSR(cookies)
            : localStorageManager;

    return (
        <ChakraProvider
            theme={theme}
            colorModeManager={colorModeManager}
            resetCSS
        >
            {children}
        </ChakraProvider>
    );
};

export const getServerSiteProps: GetServerSideProps = async ({ req }) => {
    return {
        props: {
            cookies: req.headers.cookie ?? "",
        },
    };
};
