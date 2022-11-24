import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

/* source -> https://github.com/chakra-ui/chakra-ui/issues/1814 */
const Motiondiv = motion(Box);

interface Props {
    children: React.ReactNode;
    delay: number;
}

const Section = ({ children, delay = 0 }: Props) => {
    return (
        <Motiondiv
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.8,
                delay,
            }}
            my={6}
        >
            {children}
        </Motiondiv>
    );
};

export default Section;
