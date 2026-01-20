import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function GraduatesPage() {
    return (
        <>
            <Helmet>
                <title>Graduates - Next Wave Dev</title>
            </Helmet>
            <Navbar />
            <div style={{ padding: "5rem 5vw", maxWidth: "2200px", margin: "0 auto" }}>
                <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "2rem" }}>
                    Our Graduates
                </h1>
                <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#333" }}>
                    Welcome to the Graduates page. Here you'll find success stories and career
                    journeys of our program graduates who have gone on to make their mark in the
                    tech industry.
                </p>
            </div>
            <Footer />
        </>
    );
}

export default GraduatesPage;
