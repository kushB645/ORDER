import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, totalPrice } =
    useContext(CartContext);

  const deliveryFee = 30;
  const tax = totalPrice * 0.05;
  const finalTotal = totalPrice + deliveryFee + tax;

  if (cart.length === 0) {
    return (
      <div className="bg-[#f5f1eb] min-h-screen pt-20">
        <div className="bg-[#ff8400] text-white py-16 text-center">
          <h1 className="text-4xl font-bold mb-2">
            Your Cart
          </h1>

          <p className="text-lg">
            Your cart is empty 🛒
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f1eb] min-h-screen">

      {/* Header */}
      <div className="bg-[#ff8400] text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Your Cart
        </h1>

        <p className="text-lg">
          Review your items before checkout
        </p>
      </div>

      {/* Layout */}
      <div className="max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">

        {/* Cart Items */}
        <div>

          {cart.map((item) => (
            <div
              key={item.id}
              className=" flex items-center bg-white p-5 rounded-2xl shadow-lg mb-5"
            >
              <img
                src={
                  item.image
                    ? item.image
                    : "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                }
                alt={item.name}
                className=" w-[70px] h-[70px] rounded-xl object-cover mr-4"
              />

              <div className="flex-1">
                <h3 className="text-lg font-semibold">
                  {item.name}
                </h3>

                <div className="flex items-center gap-3 mt-2">

                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="bg-[#ff6b35] text-white px-3 py-1 rounded-md font-bold"
                  >
                    −
                  </button>

                  <span className="font-semibold">
                    {item.qty}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="bg-[#ff6b35] text-white px-3 py-1 rounded-md font-bold"
                  >
                    +
                  </button>

                </div>
              </div>

              <div className="text-lg font-bold">
                ₹{item.price * item.qty}
              </div>
            </div>
          ))}

        </div>

        {/* Summary */}
        <div
          className=" bg-white p-6 rounded-2xl shadow-lg h-fit"
        >
          <h2 className="text-2xl font-bold mb-5">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3 text-slate-600">
            <span>Subtotal</span>
            <span>₹{totalPrice}</span>
          </div>

          <div className="flex justify-between mb-3 text-slate-600">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee}</span>
          </div>

          <div className="flex justify-between mb-3 text-slate-600">
            <span>Tax (5%)</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>

          <hr className="my-5" />

          <div className="flex justify-between text-xl font-bold mb-5">
            <span>Total</span>
            <span>₹{finalTotal.toFixed(2)}</span>
          </div>

          <button
            className=" w-full bg-[#ff6b35] text-white py-3 rounded-xl font-semibold hover:bg-[#e55a24] transition"
          >
            Proceed to Checkout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cart;