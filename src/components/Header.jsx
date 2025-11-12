import { LOGO_URL } from "../utils/content";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        ></img>
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
        </ul>
      </div>
    </div>
  );
};


export default Header;