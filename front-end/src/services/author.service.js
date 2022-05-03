import { gql } from "@apollo/client";

const getAuthorQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

export { getAuthorQuery };
