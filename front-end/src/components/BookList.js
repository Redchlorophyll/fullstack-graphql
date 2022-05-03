import React from "react";
import { useQuery } from "@apollo/client";
import { getBookQuery } from "services/book.service";

function BookList() {
  const { loading, error, data } = useQuery(getBookQuery);

  const displayBooks = () => {
    if (loading) {
      return <div>loading Books...</div>;
    } else {
      return data.books.map((book) => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  };
  if (!loading) console.log(data.books);
  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
    </div>
  );
}

export default BookList;
