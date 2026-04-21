import React from "react";

const ProductCard = ({ item }) => {
  const { name, brand, category, price, rating, stock, image, description } =
    item;
  return (
    <div className="max-w-full w-full border border-gray-200 p-4 justify-start items-start rounded flex flex-col">
      <h1 className="font-semibold text-xl">{name}</h1>
      <p>{brand}</p>
      <p>{category}</p>
      <p>{stock}</p>
      <p>{rating}</p>
      <p>{description}</p>
      <p className="font-semibold text-xl text-green-600">${price}</p>
      <div className="mt-auto flex justify-end items-end max-w-full w-full">
        <button className="btn btn-primary mt-4">Show Details</button>
      </div>
    </div>
  );
};

export default ProductCard;

// {
//       "id": "1",
//       "name": "Wireless Noise-Cancelling Headphones",
//       "brand": "AudioTech",
//       "category": "Electronics",
//       "price": 199.99,
//       "rating": 4.8,
//       "stock": 15,
//       "image": "https://placehold.co/400x400?text=Headphones",
//       "description": "High-fidelity audio with active noise cancellation and 30-hour battery life."
//     },
