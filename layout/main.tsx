import Footer from "../components/footer";
import Menu from "../components/menu";

interface Props {
    children: React.ReactNode;
}

const Main = ({ children }: Props) => {
    return (
        <>
            <Menu />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Main;
