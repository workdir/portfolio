import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode, type StyleFunctionProps } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: true,
};

const components = {
    Heading: {
        variants: {
            "section-title": {
                fontSize: 32,
                mb: 4,
            },
            "post-preview": {
                fontSize: 22,
            },
        },
    },
};

const styles = {
    global: (props: StyleFunctionProps) => ({
        body: {
            bg: mode("#ffffff", "gray.800")(props),
            color: mode("#242424", "#fafafa")(props),
        },
    }),
};

const fonts = {
    body: "'Quicksand', sans-serif",
    heading: "'Quicksand', sans-serif",
};

export const theme = extendTheme({ config, components, styles, fonts });
