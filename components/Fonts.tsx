import { Anek_Gurmukhi } from "@next/font/google";

const anek = Anek_Gurmukhi({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const Fonts = () => {
    return (
        <style jsx global>{`
            html {
                font-family: ${anek.style.fontFamily};
            }
        `}</style>
    );
};

export default Fonts;
