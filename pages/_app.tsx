import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Layout from "../layout/main";
import { Chakra } from "../components/chakra";
import Fonts from "../components/fonts";
import { PrismGlobal } from "../styles/prism";

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <Chakra cookies={pageProps.cookies}>
            <PrismGlobal />
            <Fonts />
            <Layout>
                <AnimatePresence exitBeforeEnter initial={false}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </Chakra>
    );
}
