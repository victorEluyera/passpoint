import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NavBars() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 999 });
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    if (isDesktopOrLaptop) {
      setShowMenu(true);
    }
  }, []);

  return (
    <div className="navbar">
      <nav className="nav-container">
        <div id="menu_icon_container">
          <div id="logo">PassPoint</div>
          {!isDesktopOrLaptop && (
            <button
              onClick={toggleMenu}
              style={{
                background: "black",
                color: "white",
                border: "none",
                fontSize: "20px",
              }}
            >
              <AiOutlineMenu>menu</AiOutlineMenu>
            </button>
          )}
        </div>
        {showMenu && (
          <ul>
            <li>
              <Link to="/" id="active-link">
                Home
              </Link>
            </li>
            <li>
              <HashLink smooth to="/#about">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#features">
                Features
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#spec">
                Spec
              </HashLink>
            </li>

            <button id="contact-btn">
              Contact Us
              <i class="material-icons">contacts</i>
            </button>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default NavBars;
