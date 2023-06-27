import React from "react";
import { useAppSelector } from "../redux/store";
import BookCard from "./BookCard";

const BookSection = () => {
  const books = useAppSelector((state) => state.book.data?.items);

  return (
    <div className="mx-auto container grid grid-cols-4 gap-4 text-center">
      {books &&
        books.map((item) => (
          <div>
            <BookCard
              title={item.volumeInfo.title}
              img={item.volumeInfo.imageLinks?.thumbnail}
              author={item.volumeInfo.authors}
            />
          </div>
        ))}
    </div>
  );
};

export default BookSection;
