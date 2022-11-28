import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Layout from "../layout/global";
import Chakra from "../components/chakra";
import Fonts from "../components/fonts";

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Fonts />
            <Layout>
                <AnimatePresence exitBeforeEnter initial={false}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </Chakra>
    );
}
