import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBookQuery } from "services/book.service";
import BookDetail from "components/BookDetail";

function BookList() {
  const { loading, error, data } = useQuery(getBookQuery);
  const [getSelectedBook, setSelectedBook] = useState("");

  const displayBooks = () => {
    if (loading) {
      return <div>loading Books...</div>;
    } else {
      return data.books.map((book) => {
        return (
          <li key={book.id} onClick={() => setSelectedBook(book.id)}>
            {book.name}
          </li>
        );
      });
    }
  };
  if (!loading) console.log(data.books);
  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
      {getSelectedBook && <BookDetail selectedId={getSelectedBook} />}
    </div>
  );
}

export default BookList;
