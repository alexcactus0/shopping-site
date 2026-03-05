import { useMemo } from "react";
import { useCart } from "./useCart";
import { useFetchImages } from "../../API/pexelsAPI";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const imageIds = useMemo(
    () => cartItems.map((item) => item.imageId),
    [cartItems],
  );
  const images = useFetchImages(imageIds);

  const total = useMemo(() => {
    return cartItems
      .reduce((sum, item) => {
        const priceValue = Number(item.price.replace("€", ""));
        return sum + priceValue * (item.quantity || 1);
      }, 0)
      .toFixed(2);
  }, [cartItems]);

  const getImage = (id) =>
    images.find((img) => img.id === id)?.data?.src?.medium;

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-10">
          Shopping Cart
        </h1>
        {cartItems.length === 0 ? (
          <div className="text-center bg-white rounded-2xl shadow-sm border py-24">
            <h2 className="text-2xl font-medium text-gray-900">
              Your cart is empty
            </h2>
            <Link
              to="/shop"
              className="inline-block mt-6 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center gap-6 bg-white border rounded-2xl p-6 shadow-sm"
                >
                  <div className="w-full sm:w-32 h-32 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                    <img
                      src={getImage(item.imageId)}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow flex flex-col sm:flex-row justify-between w-full">
                    <div>
                      <h2 className="text-xl font-semibold">{item.name}</h2>
                      <p className="text-gray-400 text-sm uppercase">
                        {item.category}
                      </p>
                      <div className="flex items-center gap-3 mt-4">
                        <div className="flex items-center border rounded-lg bg-gray-50">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-3 py-1 border-r"
                          >
                            -
                          </button>
                          <span className="px-4 font-medium text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-3 py-1 border-l"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-small text-red-500 underline ml-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 text-right">
                      <p className="text-lg font-bold">
                        €{" "}
                        {(
                          Number(item.price.replace("€", "")) * item.quantity
                        ).toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-400">{item.price} each</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm sticky top-6">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 border-b pb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>€ {total}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-6">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-black text-gray-900">
                    € {total}
                  </span>
                </div>

                <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition transform active:scale-[0.98]">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
