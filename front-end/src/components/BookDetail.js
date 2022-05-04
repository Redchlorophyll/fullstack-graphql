import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { getAuthorQuery } from "services/author.service";
import {
  addBookMutation,
  getBookQuery,
  getBoookDetailQuery,
} from "services/book.service";

function BookDetail({ selectedId }) {
  const { loading, error, data } = useQuery(getBoookDetailQuery, {
    variables: { id: selectedId },
  });
  if (!loading) console.log("selectedData =>", data.book);

  const renderData = () => {
    if (loading) {
      return <span>Loading book details</span>;
    } else {
      return (
        <div>
          <h1>{data.book.name}</h1>
          <ul>
            <li>genre: {data.book.genre}</li>
            <li>
              author: {data.book.author.name} / {data.book.author.age}
            </li>
            <li>
              author works
              <ul>
                {data.book.author.books.map((book) => {
                  return <li>{book.name}</li>;
                })}
              </ul>
            </li>
          </ul>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
}

export default BookDetail;
