import React from "react";
import { useAppSelector } from "../redux/store";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  let { id } = useParams();
  const books = useAppSelector((state) => state.book.data?.items);
  const selectedBook = books?.filter((item) => item.id == id);
  return (
    <div>
      {selectedBook?.map((item) => (
        <div>{item.id}</div>
      ))}
    </div>
  );
};

export default BookDetails;
