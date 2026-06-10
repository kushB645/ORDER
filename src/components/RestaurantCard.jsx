const RestaurantCard = ({ resData }) => {
  const {
    image,
    restaurantName,
    type,
    address,
    rating,
    deliveryTime,
  } = resData;

  return (
    <div className="bg-[#f5f1eb] rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
      <img
        src={image}
        alt={restaurantName}
        className="w-full h-56 object-cover"/>

      <div className="p-4">
        <h3 className="text-xl font-bold text-slate-800 mb-2">
          {restaurantName}
        </h3>

        <p className="text-gray-600 mb-2">
          {type}
        </p>

        <p className="text-gray-500 text-sm mb-3 line-clamp-2">
          {address}
        </p>

        <div className="flex justify-between items-center">
          <span className="font-semibold text-yellow-500">
            ⭐ {rating}
          </span>

          <span className="text-slate-700 font-medium">
            {deliveryTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;