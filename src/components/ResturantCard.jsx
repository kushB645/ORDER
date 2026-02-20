
const ResturantCard = (props) => {
  const { resData } = props;

  const { image, restaurantName, type, address, rating, deliveryTime} =
    resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#e2e1e1ff" }}>
      <img
        className="food-logo"
        src={
          image
        }
      />
      <h3>{restaurantName}</h3>
      <h3>{type}</h3>
      <h3>{address}</h3>
      <h3><i className="ri-star-s-fill"></i>{rating}</h3>
      <h3>{deliveryTime}</h3>
    </div>
  );
};

export default ResturantCard;