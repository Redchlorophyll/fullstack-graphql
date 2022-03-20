const graphql = require("graphql");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

//dummy data
const books = [
  { name: "Name Of The Wind", genre: "Fantasy", id: "1" },
  { name: "Kuyang", genre: "Horor", id: "2" },
  { name: "History Romance", genre: "Documenter", id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { GraphQLString } },
      resolve(parent, args) {
        //code to get data from db/other source
        return _.find(books, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
