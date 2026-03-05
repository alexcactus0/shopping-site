import Nav from "./components/Nav";
import { CartProvider } from "./components/cart/CartContext.jsx";
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <CartProvider>
        <Nav />
        <Outlet />
      </CartProvider>
    </>
  );
};

export default App;
