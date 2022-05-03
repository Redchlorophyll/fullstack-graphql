import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";

const getBookQuery = gql`
  {
    books {
      name
      id
    }
  }
`;
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
