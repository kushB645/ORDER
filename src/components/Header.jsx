import { LOGO_URL } from "../utils/content";
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
          <li>
            <a href="#">cart</a>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "login"?
              setBtnNameReact("logout"):
              setBtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
