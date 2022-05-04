import { gql } from "@apollo/client";

const getBookQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation {
    addBook(name: "", genre: "", authorId: "") {
      name
      id
    }
  }
`;

export { getBookQuery, addBookMutation };
