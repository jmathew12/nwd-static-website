import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function CompaniesPage() {
    return (
        <>
            <Helmet>
                <title>Companies - Next Wave Dev</title>
            </Helmet>
            <Navbar />
            <div style={{ padding: "5rem 5vw", maxWidth: "2200px", margin: "0 auto" }}>
                <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "2rem" }}>
                    Partner Companies
                </h1>
                <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#333" }}>
                    Welcome to the Companies page. Discover how companies partner with us to
                    build exceptional talent and create opportunities for the next generation
                    of developers.
                </p>
            </div>
            <Footer />
        </>
    );
}

export default CompaniesPage;
