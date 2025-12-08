import { Link } from "react-router-dom";
import { FooterLink } from "./microComponents/footer/footerLink";
import { Separator } from "./microComponents/footer/separator";
import NEXTWAVEDEV from "../images/nextwavedev.png";
import CANDID_SEAL from "../images/candid-transparency-logo.svg";
import LINKEDIN_ICON from "../images/linkedin_logo.png";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        minHeight: "120px",
        gap: "5rem",
        backgroundColor: "#004da8",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap", 
        padding: "1rem 2rem",
        boxSizing: "border-box",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "auto",
          gap: "5rem",
          flexWrap: "wrap",
          justifyContent: "flex-start", // maintain original left alignment
          alignItems: "center"
        }}
      >
        <ul style={{ ...footerList }}>
          <h4 style={{ ...footerCategory }}>Navigation</h4>
          <Separator />
          <ul
            style={{
              ...footerList,
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "flex-start" // maintain left alignment
            }}
          >
            <li><FooterLink name="Home" /></li>
            <li><FooterLink name="Contact" /></li>
            <li><FooterLink name="About" /></li>
            <li><FooterLink name="Developers" /></li>
            <li><FooterLink name="Portfolio" /></li>          
            <a
              href="https://bonfire.com/store/next-wave-dev-store"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              Shop
            </a>
          </ul>
        </ul>

        <ul className="footer-contact">
          <h4 style={{ ...footerCategory }}>Contact Us</h4>
          <Separator />
          <Link
            to={"mailto:nextwavedev.org@gmail.com"}
            style={{ textDecoration: "none" }}
          >
            <li style={{ ...footerList }}>nextwavedev.org@gmail.com</li>
          </Link>
        </ul>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "auto",
          gap: "2rem",
          alignItems: "center",
          justifyContent: "flex-end", // maintain original right alignment
          flexWrap: "wrap"
        }}
      >
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/company/next-wave-dev/"
          target="_blank"
        >
          <img
            src={LINKEDIN_ICON}
            alt="LinkedIn Icon"
            style={{ width: "64px", height: "64px" }}
          />
        </a>

        {/* Local Candid Seal of Transparency */}
        <a
          href="https://app.candid.org/profile/16346708/next-wave-dev-33-3742956"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={CANDID_SEAL}
            alt="Candid Seal of Transparency"
            style={{
              height: "64px",
              width: "auto",
              display: "block",
              borderRadius: "4px",
              backgroundColor: "white",
              padding: "4px",
            }}
          />
        </a>

        <Link
          to={"/"}
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <img
            src={NEXTWAVEDEV}
            alt="Next Wave Dev logo"
            style={{ width: "6rem", height: "auto" }}
          />
        </Link>
      </div>
    </div>
  );
};

const footerCategory = {
  fontWeight: 600,
  textAlign: "center",
  color: "white",
};

const footerList = {
  listStyleType: "none",
  fontWeight: 200,
  color: "white",
};

export default Footer;
