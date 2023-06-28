import React from "react";
import { useAppSelector } from "../redux/store";
import { useParams, redirect, useNavigate } from "react-router-dom";

const BookDetails = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const books = useAppSelector((state) => state.book.data?.items);
  const selectedBooks = books?.filter((item) => item.id == id);
  const selectedBook = selectedBooks && selectedBooks[0];
  return (
    <div className="text-center w-1/2 mx-auto">
      <div className="text-4xl py-5">{selectedBook?.volumeInfo.title}</div>
      <div className="my-5">
        <img
          className="mx-auto w-1/6 "
          src={selectedBook?.volumeInfo.imageLinks?.thumbnail}
        />
      </div>

      <div className="py-3">
        <span className="font-bold">Authors: </span>
        {selectedBook?.volumeInfo.authors.map((item) => item)}
      </div>
      <div className="py-3">
        <span className="font-bold">Publisher: </span>
        {selectedBook?.volumeInfo.publisher}
      </div>
      <div className="py-3">
        <span className="font-bold">Page Count: </span>
        {selectedBook?.volumeInfo.pageCount}
      </div>
      <div className="py-3">
        <span className="font-bold">Description: </span>
        {selectedBook?.volumeInfo.description}
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => navigate("/")}
        >
          Return
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
