import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function Donation() {
    return (
        <>
            <Helmet>
                <title>Donation - Next Wave Dev</title>
            </Helmet>
            <Navbar />
            <div style={{ padding: "5rem 5vw", maxWidth: "2200px", margin: "0 auto" }}>
                <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "2rem" }}>
                    Donation 
                </h1>
                <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#333" }}>
                    Donate here
                </p>
                <iframe 
                    title='Donation form powered by Zeffy' 
                    style='position: absolute; border: 0; top:0;left:0;bottom:0;right:0;width:100%;height:100%' 
                    src='https://www.zeffy.com/embed/donation-form/support-the-next-wave-of-developers' 
                    allowpaymentrequest allowTransparency="true">
                </iframe>
            </div>
            <Footer />
        </>
    );
}

export default Donation;
