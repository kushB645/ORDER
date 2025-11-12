import { CON_URL } from "../utils/content";

const ResturantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwoString } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#e2e1e1ff" }}>
      <img
        className="food-logo"
        src={
          CON_URL+
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h3>{cuisines?.join(" , ")}</h3>
      <h3>{avgRating}ratings</h3>
      <h3>{costForTwoString}</h3>
      <h3>{resData.info.sla.deliveryTime}min</h3>
    </div>
  );
};

export default ResturantCard;