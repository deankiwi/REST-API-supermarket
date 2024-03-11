const { fetchProducts } = require("../models/products.models");

const getProducts = (req, res) => {
  const product_uid = req.params.product_uid;
  const product = fetchProducts(product_uid);

  if (!product) {
    res.status(404).send("Product not found");
    return;
  }
  res.send(product);
};
exports.getProducts = getProducts;
