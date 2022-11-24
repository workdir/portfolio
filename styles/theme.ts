import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: true,
};

const components = {
    Heading: {
        variants: {
            "section-title": {
                fontSize: 20,
            },
        },
    },
};

const styles = {
    global: (props: StyleFunctionProps) => ({
        body: {
            bg: mode("green.200", "blue.900")(props),
        },
    }),
};

const fonts = {
    body: "'Anek Gurmukhi', sans-serif;",
};

const theme = extendTheme({ config, components, styles, fonts });

export default theme;
