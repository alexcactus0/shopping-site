import { NavLink } from "react-router";
import cacti from "../assets /cacti.svg";

const CustomNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative pb-1 transition-colors duration-700 ease-in-out ${
          isActive ? "text-black font-bold" : "text-gray-400 hover:text-black"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {children}
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-black rounded-2xl transition-transform duration-700 ease-in-out origin-left ${
              isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
            style={{ width: "100%" }}
          />
        </>
      )}
    </NavLink>
  );
};

const Nav = () => {
  return (
    <header className="flex gap-10 justify-between px-10 pt-4 pb-5 bg-white border-b-[1px] sticky top-0 left-0 w-full z-50">
      <div className="navLogo flex gap-2 items-end text-2xl font-semibold">
        <p>CACTIX</p>
        <img src={cacti} alt="Logo" />
      </div>

      <nav className="grid grid-cols-[1fr_10em] items-center w-full">
        <div className="homeShop flex gap-10 justify-center">
          <CustomNavLink to="/">Home</CustomNavLink>
          <CustomNavLink to="/shop">Shop</CustomNavLink>
        </div>

        <div className="cartSection flex justify-end">
          <CustomNavLink to="/cart">Cart</CustomNavLink>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
