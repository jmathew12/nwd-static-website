import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function GraduatesPage() {
    return (
        <>
            <Helmet>
                <title>Next Wave Dev - Graduates</title>
            </Helmet>
            <Navbar />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '70vh',
                    padding: '2rem',
                }}
            >
                <h1 style={{ fontSize: '3rem', color: '#004da8', marginBottom: '1rem' }}>
                    Graduates Page
                </h1>
                <p style={{ fontSize: '1.5rem', color: '#666', textAlign: 'center', maxWidth: '600px' }}>
                    Coming Soon - This page is under construction.
                </p>
                <p style={{ fontSize: '1.2rem', color: '#999', marginTop: '1rem' }}>
                    Check back later for more information about joining Next Wave Dev as a graduate.
                </p>
            </div>

            <Footer />
        </>
    );
}

export default GraduatesPage;
