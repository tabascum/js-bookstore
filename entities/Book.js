const Product = require("./Product");

module.exports = class Book extends Product {
  constructor(
    title,
    sinopsis,
    genre,
    pages,
    author,
    description,
    price,
    inStock = 0
  ) {
    super(`Book: ${title}`, description, price, inStock);
    this.title = title;
    this.sinopsis = sinopsis;
    this.genre = genre;
    this.pages = pages;
    this.author = author;
  }
};
