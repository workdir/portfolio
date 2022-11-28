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
            article: {
                fontSize: "26px",
            },
        },
    },
};

const styles = {
    global: (props: StyleFunctionProps) => ({
        body: {
            bg: mode("#ffffff", "gray.800")(props),
            color: mode("#000000", "#ffffff")(props),
        },
    }),
};

const fonts = {
    body: "'Quicksand', sans-serif",
    heading: "'Quicksand', sans-serif",
};

const theme = extendTheme({ config, components, styles, fonts });

export default theme;
