import Header from "../components/header";
import Banner from "../components/banner";
import Applications from "../components/applications";
import Products from "../components/products";
import About from "../components/about";
import Footer from "../components/footer";

export default function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Applications />
            <Products />
            <About />
            <Footer />

        </div>
    )
}