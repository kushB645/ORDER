import ResturantCard from "./ResturantCard";
import { useState } from "react";
import resList  from "../utils/mockdata";


const Body = () => {
  const [listOfResturant,setlistOfResturant]= useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filterList= listOfResturant.filter(
            (res) => res.info.avgRating>=4.5
          );
          setlistOfResturant(filterList);
        }}>
          Top Rated Resturants 
          </button>
        </div>
      <div className="res-container">
        {listOfResturant.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};


export default Body;