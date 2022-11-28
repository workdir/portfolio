import { Quicksand as Font } from "@next/font/google";

const font = Font({
    subsets: ["latin"],
    weight: ["400", "500"],
});

const Fonts = () => {
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${font.style.fontFamily};
                }
            `}</style>
        </>
    );
};

export default Fonts;
