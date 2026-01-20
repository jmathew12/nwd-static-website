import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function ShopPage() {
    return (
        <>
            <Helmet>
                <title>Shop - Next Wave Dev</title>
            </Helmet>
            <Navbar />
            <div style={{ padding: "5rem 5vw", maxWidth: "2200px", margin: "0 auto" }}>
                <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "2rem" }}>
                    Next Wave Dev Shop
                </h1>
                <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#333" }}>
                    Welcome to the Next Wave Dev Shop. Browse our collection of merchandise
                    and support our mission to bridge the gap between education and career success.
                </p>
            </div>
            <Footer />
        </>
    );
}

export default ShopPage;
