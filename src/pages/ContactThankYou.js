import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function ContactThankYou() {
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17737966605/ejt6CPmN-PYbEI3Ij4pC',
        value: 1.0,
        currency: 'USD'
      });
    }
  }, []);
  
  return (
    <>
      <Helmet>
        <title> Next Wave Dev - Thank You </title>
      </Helmet>
      <Navbar />
      <div style={{ minHeight: "calc(100vh - 95px)", height: "1px" }}>
        <div
          style={{
            marginTop: "10vh",
            marginBottom: "10vh",
            marginLeft: "2rem",
            marginRight: "2rem",
            height: "100%",
          }}
        >
          <div
            style={{
              ...flexParent,
              height: "100%",
            }}
          >
            <div
              style={{
                ...flexChild,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontSize: "1.5rem",
                fontWeight: "500",
                color: "#333",
              }}
              className={"col-sm-6"}
            >
              <p>Thank you! Your response has been submitted.</p>
            </div>
            <div
              style={{
                ...flexChild,
                display: "flex",
                justifyContent: "center",
              }}
              className={"col-sm-6"}
            >
              <iframe
                title="contact-page-map"
                src="https://maps.google.com/maps?q=12356+NORTHUP+WAY+STE+E,+BELLEVUE,+WA,+98005-5176,+UNITED+STATES&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="80%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                style={{ border: "none" }}
                referrerPolicy="no-referrer-when-downgrade"
                id={"contact-page-map"}
              ></iframe>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export const flexChild = {
  position: "relative",
  width: "100%",
  minHeight: "1px",
  paddingRight: "15px",
  paddingLeft: "15px",
};

export const flexParent = {
  display: "flex",
  flexWrap: "wrap",
};

export default ContactThankYou;
