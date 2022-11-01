import React from "react";

const ServiceCard = ({ serviceData: { img, price, title }}) => {
  return (
    <div className="card card-compact text-start bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-2xl font-semibold">{title}</h3>
        <p className="text-xl text-orange-500 font-semibold">
          Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
