import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { getAuthorQuery } from "services/author.service";
import { addBookMutation } from "services/book.service";

function AddBook() {
  const { loading, error, data } = useQuery(getAuthorQuery);
  const [addBook, { loading: bookLoading, error: bookError, data: bookData }] =
    useMutation(addBookMutation);

  const [getQuery, setQuery] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  const displayAuthor = () => {
    if (loading) {
      return <option disabled>loading Authors...</option>;
    }
    if (!loading) {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addBook();
  };
  return (
    <form id="add-book" onSubmit={(e) => onSubmit(e)}>
      <div className="filed">
        <label>Book Name</label>
        <input
          type="text"
          onChange={(e) => setQuery({ ...getQuery, name: e.target.value })}
        />
      </div>

      <div className="filed">
        <label>Genre</label>
        <input
          type="text"
          onChange={(e) => setQuery({ ...getQuery, genre: e.target.value })}
        />
      </div>

      <div className="filed">
        <label>Author</label>
        <select
          onChange={(e) => setQuery({ ...getQuery, authorId: e.target.value })}
        >
          <option>Select Author</option>
          {displayAuthor()}
        </select>
      </div>

      <button>+ Add Book</button>
    </form>
  );
}

export default AddBook;
