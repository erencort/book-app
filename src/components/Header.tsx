import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { fetchBooks } from "../redux/bookSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.book.data);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    dispatch(fetchBooks("a"));
    console.log(books);
  }, [dispatch]);

  const searchBook = () => {
    dispatch(fetchBooks(query));
    setQuery("");
  };
  return (
    <div className=" text-center py-10 ">
      <div className="text-4xl mb-5">Book Search</div>
      <div>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className="py-1 px-3 mr-5 text-black"
        />
        <button
          onClick={searchBook}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
