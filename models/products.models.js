const data = require("../db/data/data.json");

const fetchProducts = (product_uid) => {
  return data.find((product) => product.product_uid === product_uid);
};
exports.fetchProducts = fetchProducts;
