import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import restaurantsMenu from "../utils/MenuDetail";
import resList from "../utils/RestaurantDetail";
import { CartContext } from "../components/CartContext";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = restaurantsMenu.find(
    (res) => res.restaurantID === Number(resId),
  );

  const restaurantDetails = resList.find(
    (res) => res.restaurantID === Number(resId),
  );

  const { cart, addToCart, increaseQty, decreaseQty } = useContext(CartContext);

  return (
    <div className="bg-[#f5f1eb] min-h-screen pt-20">
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${restaurantDetails.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <Link
            to="/"
            className="inline-block mb-6 bg-white/20 backdrop-blur-sm  px-4 py-2 rounded-lg hover:bg-white/30 transition"
          >
            ← Back to Restaurants
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {restaurantDetails.restaurantName}
          </h1>

          <p className="text-xl mb-4">{restaurantDetails.cuisine}</p>

          <div className="flex flex-col md:flex-row gap-3 md:gap-8 text-lg">
            <span>⭐ {restaurantDetails.rating}</span>
            <span>⏱ {restaurantDetails.deliveryTime}</span>
            <span>📍 {restaurantDetails.address}</span>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-7xl mx-auto px-5 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">Menu</h2>

        {restaurant.menu.map((category) => (
          <div key={category.category} className="mb-12">
            <h2
              className="text-2xl md:text-3xl font-bold mb-6 text-[#ff6b35]"
            >
              {category.category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item) => {
                const cartItem = cart.find((c) => c.id === item.id);

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-lg p-4 flex justify-between items-center hover:shadow-xl transition"
                  >
                    {/* Left */}
                    <div className="flex-1 pr-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {item.name}
                      </h3>

                      <p className="text-[#ff6b35] font-bold">₹{item.price}</p>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col items-center gap-3">
                      <img
                        src={
                          item.image
                            ? item.image
                            : "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                        }
                        alt={item.name}
                        className=" w-24 h-24 rounded-xl object-cover"
                      />

                      {cartItem ? (
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="bg-[#ff6b35] text-white w-8 h-8 rounded-md font-bold"
                          >
                            −
                          </button>

                          <span className="font-semibold">{cartItem.qty}</span>

                          <button onClick={() => increaseQty(item.id)} className="bg-[#ff6b35]
                              text-white w-8 h-8 rounded-md font-bold"
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          className="bg-[#ff6b35] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#e55a24] transition"
                          onClick={() => addToCart(item)}
                        >
                          ADD
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
