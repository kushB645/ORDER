import { LOGO_URL } from "../utils/content";
import { useContext, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const initials =
    user?.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase() ||
    user?.email?.[0]?.toUpperCase() ||
    "";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/75 backdrop-blur-md shadow-md">
      <div className="flex items-center justify-between px-4 md:px-10 h-20 font-semibold text-lg text-slate-700">

        {/* Logo */}
        <Link to="/">
          <img
            src={LOGO_URL}
            alt="logo"
            className="w-14 h-14 rounded-xl"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">

          <NavLink
            to="/"
            className="px-4 py-2 rounded-xl hover:bg-orange-500 hover:text-white transition"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="px-4 py-2 rounded-xl hover:bg-orange-500 hover:text-white transition"
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className="px-4 py-2 rounded-xl hover:bg-orange-500 hover:text-white transition"
          >
            Contact
          </NavLink>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-2xl"
          >
            🛒

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* User */}
          {user ? (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">
                {initials}
              </div>

              <button
                onClick={handleLogout}
                className="text-orange-500 font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="px-4 py-2 rounded-xl hover:bg-orange-500 hover:text-white transition"
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Right Side */}
        <div className="flex md:hidden items-center gap-4">

          <Link to="/cart" className="relative text-2xl">
            🛒

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">

          <NavLink
            to="/"
            className="block px-6 py-4 hover:bg-orange-100"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="block px-6 py-4 hover:bg-orange-100"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className="block px-6 py-4 hover:bg-orange-100"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          {user ? (
            <>
              <div className="px-6 py-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center">
                  {initials}
                </div>

                <span>Profile</span>
              </div>

              <button
                onClick={handleLogout}
                className="w-full text-left px-6 py-4 text-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="block px-6 py-4 hover:bg-orange-100"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;