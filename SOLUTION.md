# SOLUTION

## How it works
Solution employs a REST API built using the express framework. When a request is made to the endpoint `/product/id/:product_uid`, the `getProducts()` function in `products.controllers.js` extracts the `product_uid` from the params. This value is then passed to the `fetchProducts()` function in `products.models.js`. If the product is found, an object with the `product_uid` is returned; otherwise, a 404 response is dispatched.

## if I had more time
- Unit tests for fetchProducts function
- Implementation tests for the /product/id/:product_uid endpoint to ensure robust functionality and handling of various scenarios.