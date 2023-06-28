import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <div className=" min-h-screen text-white from-gray-700 to-gray-950 bg-gradient-to-t">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<BookDetails />} />
      </Routes>
    </div>
  );
}

export default App;
