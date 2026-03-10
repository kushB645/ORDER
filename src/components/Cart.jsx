import { useContext } from "react";
import { CartContext } from "./CartContext";


const Cart = () => {
  const { cart, increaseQty, decreaseQty, totalPrice } =
    useContext(CartContext);

  const deliveryFee = 30;
  const tax = totalPrice * 0.05;
  const finalTotal = totalPrice + deliveryFee + tax;

  /* EMPTY CART UI */

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-header">
          <h1>Your Cart</h1>
          <p>Your cart is empty 🛒</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Your Cart</h1>
        <p>Review your items before checkout</p>
      </div>

      <div className="cart-layout">
        {/* LEFT SIDE ITEMS */}

        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-card" key={item.id}>
              <img
                src={
                  item.image
                    ? item.image
                    : "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                }
                alt={item.name}
                className="cart-img"
              />

              <div className="cart-info">
                <h3>{item.name}</h3>

                <div className="qty-box">
                  <button onClick={() => decreaseQty(item.id)}>−</button>

                  <span>{item.qty}</span>

                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
              </div>

              <div className="cart-price">₹{item.price * item.qty}</div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE SUMMARY */}

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{totalPrice}</span>
          </div>

          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee}</span>
          </div>

          <div className="summary-row">
            <span>Tax (5%)</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <span>₹{finalTotal.toFixed(2)}</span>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
