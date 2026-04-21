import Link from "next/link";
import React from "react";

const BookCard = ({ item }) => {
  const { id, title, author, genre, published_year, rating, pages, price } =
    item;
  return (
    <div className="max-w-full w-full border border-gray-200 p-4 justify-start items-start rounded flex flex-col">
      <h1 className="font-semibold text-xl">{title}</h1>
      <p>{author}</p>
      <p>{genre}</p>
      <p>{published_year}</p>
      <p>{rating}</p>
      <p>{pages}</p>
      <p className="font-semibold text-xl text-green-600">${price}</p>
      <div className="mt-auto flex justify-end items-end max-w-full w-full">
        <Link href={`/books/${id}`}>
          <button className="btn btn-primary mt-4">See Details</button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
