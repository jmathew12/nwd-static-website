import { Link } from "react-router-dom";
import { FooterLink } from "./microComponents/footer/footerLink";
import { Separator } from "./microComponents/footer/separator";
import NEXTWAVEDEV from "../images/nextwavedev.png";
import CANDID_SEAL from "../images/candid-transparency-logo.svg";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "auto",
        height: "120px",
        gap: "5rem",
        backgroundColor: "#004da8",
        alignItems: "center",
        justifyContent: "space-evenly",
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
          justifyContent: "center",
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
            }}
          >
            <li>
              <FooterLink name="Home" />
            </li>
            <li>
              <FooterLink name="Contact" />
            </li>
            <li>
              <FooterLink name="About" />
            </li>
            <li>
              <FooterLink name="Developers" />
            </li>
            <li>
              <FooterLink name="Portfolio" />
            </li>
          </ul>
        </ul>

        <ul>
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
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
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

        {/* Next Wave Dev Logo */}
        <Link
          to={"/"}
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <img
            src={NEXTWAVEDEV}
            alt="Next Wave Dev logo"
            style={{ width: "6rem" }}
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
