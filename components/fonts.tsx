import { Quicksand } from "@next/font/google";

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

const Fonts = () => {
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${quicksand.style.fontFamily};
                }
            `}</style>
        </>
    );
};

export default Fonts;
