import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import restaurantsMenu from "../utils/MenuDetail";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = restaurantsMenu.find(
    (res) => res.restaurantID === Number(resId)
  );

  if (!restaurant) return <Shimmer />;

  return (
    <div className="menu">
      <h1>{restaurant?.restaurantName}</h1>

      {restaurant?.menu?.map((category) => (
        <div key={category.category}>
          <h2>{category.category}</h2>

          {category.items.map((item) => (
            <p key={item.id}>
              {item.name} - ₹{item.price}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;