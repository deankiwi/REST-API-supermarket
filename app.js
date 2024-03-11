const express = require("express");
const { getProducts } = require("./controllers/products.controllers");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/product/id/:product_uid", getProducts);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
