import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/RestaurantDetail";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
  const [ListofRestaurant] = useState(resList);
  const [filteredRestaurant, setfilteredRestaurant] = useState(resList);
  const [SearchText, setSearchText] = useState("");

  return ListofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-[#f5f1eb] min-h-screen pt-20">

      {/* Hero Section */}
      <div className="bg-[#ff8400] text-white flex flex-col items-center justify-center text-center px-5 py-20 md:py-28">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Craving something delicious?
        </h1>

        <h3 className="text-lg md:text-2xl font-medium">
          Order from your favorite restaurants and get it delivered fast
        </h3>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 px-4 py-6 -mt-12 relative z-10">

        <div className="relative w-full max-w-[700px]">

          <input
            type="text"
            placeholder="Search for restaurants, cuisines or dishes..."
            value={SearchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full py-[18px] pl-5 pr-14 rounded-[30px] border-none text-base outline-none bg-white shadow-[0_10px_25px_rgba(0,0,0,0.1)]"
          />

          <button className=" absolute right-[10px] top-1/2 -translate-y-1/2 bg-[#ff6b35] text-white w-9 h-9 rounded-full cursor-pointer"
            onClick={() => {
              const filteredRestaurant = ListofRestaurant.filter((res) =>
                res.restaurantName
                  .toLowerCase()
                  .includes(SearchText.toLowerCase())
              );

              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            🔍
          </button>

        </div>

        <button className="px-6 py-[18px] rounded-[20px] border border-[#ff6b35] bg-white text-[#ff6b35] font-semibold shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:bg-[#ff6b35] hover:text-white transition-all duration-300"
          onClick={() => {
            const filterdList = filteredRestaurant.filter(
              (res) => res.rating > 4.6
            );

            setfilteredRestaurant(filterdList);
          }}
        >
          Top Rated Restaurant
        </button>

      </div>

      {/* Restaurant Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-5 py-10">
        {filteredRestaurant.map((resturant) => (
          <Link
            key={resturant.restaurantID}
            to={`/restaurant/${resturant.restaurantID}`}
          >
            <RestaurantCard resData={resturant} />
          </Link>
        ))}
      </div>

      <Footer />

    </div>
  );
};

export default Body;