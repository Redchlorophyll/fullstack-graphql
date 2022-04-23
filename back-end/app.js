const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.once("open", () => {
  try {
    console.log("connected to database");
  } catch (e) {
    console.log(e);
  }
});

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
