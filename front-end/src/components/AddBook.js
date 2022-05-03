import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";

const getAuthorQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;
function AddBook() {
  const { loading, error, data } = useQuery(getAuthorQuery);

  const displayAuthor = () => {
    if (loading) {
      return <option disabled>loading Authors...</option>;
    }
    if (!loading) {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.name}>
            {author.name}
          </option>
        );
      });
    }
  };
  if (!loading) console.log(data.books);
  return (
    <form id="add-book">
      <div className="filed">
        <label>Book Name</label>
        <input type="text" />
      </div>

      <div className="filed">
        <label>Genre</label>
        <input type="text" />
      </div>

      <div className="filed">
        <label>Author</label>
        <select>
          <option>Select Author</option>
          {displayAuthor()}
        </select>
      </div>

      <button>+ Add Book</button>
    </form>
  );
}

export default AddBook;
