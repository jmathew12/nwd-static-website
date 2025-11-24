import React from "react";
import { Link } from "react-router-dom";
import NSCADLOGO from "../images/nextwavedev.png";
import { WhiteSpacing } from "./microComponents/navbar/whiteSpacing";
import { Item } from "./microComponents/navbar/item";

const Navbar = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 480);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row", // stack on mobile, horizontal on desktop
        height: isMobile ? "auto" : "95px",
        gap: isMobile ? "0.5rem" : "1.5rem",
        backgroundColor: "#004da8",
        alignItems: "center",
        padding: isMobile ? "0.5rem 1rem" : "0 2rem",
      }}
    >
      <Link to="/">
        <img
          src={NSCADLOGO}
          alt="Next Wave Dev Logo"
          style={{
            width: isMobile ? "3rem" : "4rem",
            height: "auto",
            marginBottom: isMobile ? "0.5rem" : "0",
          }}
        />
      </Link>

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // stack items on mobile
          gap: isMobile ? "0.5rem" : "1rem",
          flexWrap: "wrap",
          width: isMobile ? "100%" : "auto",
          alignItems: "center",
        }}
      >
        <Item name="Contact" />
        <WhiteSpacing />
        <Item name="About" />
        <WhiteSpacing />
        <Item name="Developers" />
        <WhiteSpacing />
        <Item name="Portfolio" />
        <WhiteSpacing />
        <Item
          name="Shop"
          to="https://bonfire.com/store/next-wave-dev-store/"
          external
        />
      </div>
    </div>
  );
};

export default Navbar;
