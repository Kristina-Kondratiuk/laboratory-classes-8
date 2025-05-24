const Product = require("../models/Product");
const Cart = require("../models/Cart");

const { STATUS_CODE } = require("../constants/statusCode");

exports.addProductToCart = async (request, response) => {
  const name = request.body.name;

  try {
    await Cart.add(name);
    response.redirect("/products");
  } catch (error) {
    console.error("Error while adding to cart:", error);
    response.status(STATUS_CODE.INTERNAL_SERVER_ERROR).redirect("/products");
  }
};

exports.getProductsCount = async () => {
  return await Cart.getProductsQuantity();
};
