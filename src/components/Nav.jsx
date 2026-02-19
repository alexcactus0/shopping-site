import { NavLink } from "react-router";

const Nav = () => {
  return (
    <header className="flex gap-10 justify-between pr-10 pl-10 pt-5 pb-5 border-b-2 border-black">
      <h1>CACTIX</h1>
      <nav className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? "text-primary-700" : "";
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => {
            return isActive ? "text-primary-700" : "";
          }}
        >
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => {
            return isActive ? "text-primary-700" : "";
          }}
        >
          Cart
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;
