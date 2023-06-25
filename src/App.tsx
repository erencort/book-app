import { useEffect } from "react";
import BookSection from "./components/BookSection";
import Header from "./components/Header";
import { useAppDispatch } from "./redux/store";
import { fetchBooks } from "./redux/bookSlice";

function App() {
  return (
    <div className=" h-screen text-white from-gray-700 to-gray-950 bg-gradient-to-t">
      <Header />
      <BookSection />
    </div>
  );
}

export default App;
