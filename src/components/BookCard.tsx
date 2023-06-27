import React from "react";

interface IProps {
  title: string;
  img: string | undefined;
  author: string[];
}

const BookCard: React.FC<IProps> = ({ title, img, author }) => {
  return (
    <div
      style={{ minHeight: "300px" }}
      className="border-black border-2 grid justify-center py-2"
    >
      <div className="py-2">{title}</div>
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
      {author &&
        author.map((item) => (
          <div>
            <span>{item}</span>
          </div>
        ))}
    </div>
  );
};

export default BookCard;
