import React, { useState } from "react";
import BookData from "./BookData";
import BookList from "./BookList";

const App = () => {
  const [book, setBook] = useState(BookData);
  return (
    <>
      <div className="container my-4">
        <BookList book={book} />
        <div className="text-center mb-3">
          {" "}
          <button className=" btn btn-primary" onClick={() => setBook([])}>
            Delete Book Data
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
