import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://fakerestaurantapi.runasp.net/api/Restaurant",
    );
    const json=await data.json();

    console.log(json);
    // setresInfo(json)
  };


  if (resInfo === null) return <Shimmer />;
  const pizzas = resInfo.filter((item) => item.category === "Pizza");
  const drinks = resInfo.filter((item) => item.category === "Dryck");
  const extras = resInfo.filter((item) => item.category === "Tillbehör");

  return (
    <div className="menu">
      <h1>La Pino'z Pizza</h1>

      {/* 🍕 Pizza Section */}
      <h2>Pizza</h2>
      {pizzas.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Price: ₹{item.price}</p>
          <p>Rank: {item.rank}</p>
          <p>Toppings: {item.topping?.join(", ")}</p>
          <hr />
        </div>
      ))}

      {/* 🥤 Drinks Section */}
      <h2>Drinks</h2>
      {drinks.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Price: ₹{item.price}</p>
          <hr />
        </div>
      ))}

      {/* 🍞 Extras Section */}
      <h2>Extras</h2>
      {extras.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Price: ₹{item.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};
export default RestaurantMenu;
