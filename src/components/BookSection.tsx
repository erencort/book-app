import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import BookCard from "./BookCard";
import { fetchBooks } from "../redux/bookSlice";

const BookSection = () => {
  const books = useAppSelector((state) => state.book.data?.items);
  const dispatch = useAppDispatch();

  return (
    <div className="py-3 mx-auto container grid grid-cols-4 gap-4 text-center">
      {books &&
        books.map((item) => (
          <div>
            <BookCard
              title={item.volumeInfo.title}
              img={item.volumeInfo.imageLinks?.thumbnail}
              author={item.volumeInfo.authors}
              id={item.id}
            />
          </div>
        ))}
    </div>
  );
};

export default BookSection;
