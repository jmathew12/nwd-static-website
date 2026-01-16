import React from "react";
import { Link } from "react-router-dom";
import NWDLogo from '../images/NextWaveDevLogo/NextWaveDev_FINAL.png';
import { WhiteSpacing } from "./microComponents/navbar/whiteSpacing";
import { Item } from "./microComponents/navbar/item";

const Navbar = () => {
  // Collapse state for small widths
  const [isCollapsed, setIsCollapsed] = React.useState(window.innerWidth <= 800);

  React.useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth <= 800);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        flexDirection: isCollapsed ? "column" : "row",
        alignItems: "center",
        justifyContent: isCollapsed ? "center" : "flex-start", // left-aligned on desktop
        gap: isCollapsed ? "0.5rem" : "1rem",
        height: isCollapsed ? "auto" : "95px",
        backgroundColor: "#004da8",
        padding: "0.5rem 1rem",
      }}
    >
      <Link to={"/"}>
        <img
          src={NWDLogo}
          alt="Next Wave Dev Logo"
          style={{
            width: "4rem",
            height: "4rem",
            marginBottom: isCollapsed ? "0.5rem" : "0",
            marginRight: isCollapsed ? "0" : ".5rem",
          }}
        />
      </Link>

      <Item name={"Contact"} />
      <WhiteSpacing />
      <Item name={"About"} />
      <WhiteSpacing />
      <Item name={"Developers"} />
      <WhiteSpacing />
      <Item name={"Portfolio"} />
      <WhiteSpacing />
      <Item name="Shop" to="https://bonfire.com/store/next-wave-dev-store/" external />
    </div>
  );
};

export default Navbar;
