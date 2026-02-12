import React from "react";
import { Link } from "react-router-dom";
import NWDLogo from "../images/NextWaveDevLogo/NextWaveDev_FINAL_SMALL.jpg";
import { WhiteSpacing } from "./microComponents/navbar/whiteSpacing";
import { Item } from "./microComponents/navbar/item";

const Navbar = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenus = () => {
    setMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#004da8",
        padding: "0.75rem 1rem",
        position: "relative",
      }}
    >
      {/* Top row: Logo + Hamburger */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Link to="/" onClick={closeMenus}>
          <img
            src={NWDLogo}
            alt="Next Wave Dev Logo"
            style={{ width: "4rem", height: "4rem" }}
          />
        </Link>

        {isMobile && (
          <button
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: "1.75rem",
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}
      </div>

      {/* Navigation items */}
      {(!isMobile || menuOpen) && (
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            gap: "0.75rem",
            marginTop: isMobile ? "0.75rem" : "0",
          }}
        >
          <Item name="Contact" onClick={closeMenus} />
          <WhiteSpacing />
          <Item name="About" onClick={closeMenus} />
          <WhiteSpacing />
          <Item name="Developers" onClick={closeMenus} />
          <WhiteSpacing />
          <Item name="Portfolio" onClick={closeMenus} />
          <WhiteSpacing />

          {/* Join Us dropdown */}
          <div className="nav-dropdown">
            <span
              className="nav-dropdown-toggle"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{ cursor: "pointer", color: "#fff" }}
            >
              Join Us ▸
            </span>

            {isDropdownOpen && (
              <div
                className="nav-dropdown-menu"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "0.5rem",
                }}
              >
                <Link to="/Graduates" onClick={closeMenus}>
                  Graduates
                </Link>
                <Link to="/Companies" onClick={closeMenus}>
                  Companies
                </Link>
              </div>
            )}
          </div>

          <WhiteSpacing />
          <Item
            name="Shop"
            to="https://bonfire.com/store/next-wave-dev-store/"
            external
            onClick={closeMenus}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;