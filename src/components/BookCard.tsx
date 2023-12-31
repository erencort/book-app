import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  title: string;
  img: string | undefined;
  author: string[];
  id: string;
}

const BookCard: React.FC<IProps> = ({ title, img, author, id }) => {
  const slicedAuthors = author && author.slice(0, 3);

  return (
    <div
      style={{ minHeight: "300px" }}
      className="border-black border-2 grid justify-center py-2"
    >
      <div className="font-bold py-2">{title}</div>
      <div>
        <img
          style={{ maxHeight: "190px" }}
          className="mx-auto py-2"
          src={
            img
              ? img
              : "https://upload.wikimedia.org/wikipedia/commons/b/bd/Draw_book.png"
          }
        />
      </div>
      <div>
        {author &&
          (author.length > 3
            ? slicedAuthors.map((item) => <span>{item}</span>)
            : author.map((item) => <span>{item}</span>))}
      </div>
      <div>
        <Link to={`/details/${id}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-5">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
