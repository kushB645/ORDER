import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResturant, setlistOfResturant] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant] = useState([]);
  const [searchText,setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []); //this [] bcz two argument are pass

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5485315&lng=77.1264849&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setlistOfResturant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  
  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText}
          onChange={(e) =>{
            setSearchText(e.target.value); 
          }}/>
          <button onClick={()=>{
            const filteredRestaurant=listOfResturant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurant(filteredRestaurant);
          }}>search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfResturant.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setlistOfResturant(filterList);
          }}
        >
          Top Rated Resturants  
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
