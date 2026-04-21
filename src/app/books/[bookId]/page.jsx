import React from "react";
export const generateStaticParams = async () => {
  const response = await fetch("http://localhost:5002/books");
  const booksDetails = await response.json();

  return booksDetails.slice(0, 3).map((detailed) => ({ bookId: detailed.id }));
};
const BookDetails = async ({ params }) => {
  const { bookId } = await params;
  const bookDataDetails = await fetch(`http://localhost:5002/books/${bookId}`);

  const res = await bookDataDetails.json();
  const { title, author, genre, published_year, rating, pages, price } = res;
  return (
    <div className=" border border-gray-200 p-4 justify-start items-start rounded flex flex-col max-w-4xl w-full mx-auto my-5">
      <h1 className="font-semibold text-xl">{title}</h1>
      <p>{author}</p>
      <p>{genre}</p>
      <p>{published_year}</p>
      <p>{rating}</p>
      <p>{pages}</p>
      <p className="font-semibold text-xl text-green-600">${price}</p>
      <div className="mt-auto flex justify-end items-end max-w-full w-full"></div>
    </div>
  );
};

export default BookDetails;
