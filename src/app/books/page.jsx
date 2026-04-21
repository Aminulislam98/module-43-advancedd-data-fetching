import BookCard from "@/components/BookCard";
import React from "react";

const booksData = async () => {
  const res = await fetch("http://localhost:5002/books");
  return await res.json();
};

const BooksPage = async () => {
  const books = await booksData();
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold py-4 ">
        This is Books page!
      </h1>
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {books.map((item) => (
          <BookCard key={item.id} item={item}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
