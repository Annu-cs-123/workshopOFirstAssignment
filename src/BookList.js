import React from "react";

const BookList = ({ book }) => {
  return (
    <>
      {" "}
      {book.map((bookdata) => {
        const { id, bookName, authorName, price, image } = bookdata;
        return (
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 py-3 my-3 card">
                <div className="bookdata  " key={id}>
                  <div className="d-flex">
                    {" "}
                    <img src={image} alt={bookName} className="w-25 " />
                    <div className="my-2 mx-3 ">
                      <h2>{bookName}</h2>
                      <h4>{authorName}</h4>
                      <h6>{price} Rs.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BookList;
