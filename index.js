const App = require("./App");

const app = new App();

app.createAuthor("Tidbek, Karin", "Swedish", "...");
app.createAuthor("Bishop, Anne", "American", "...");
app.createAuthor("Orwell, George", "British", "...");

const authors = app.getAuthor();

app.createBook("Amatka", "...", "dystopic", 256, authors[0], "...", 12.99, 50);
app.createBook(
  "Sebastian",
  "...",
  "fantasy",
  384,
  authors[1],
  "...",
  16.99,
  60
);
app.createBook("1984", "...", "dystopic", 327, authors[2], "...", 12.0, 90);

const books = app.getBooks();

app.createUser("Vasco", "example@example.com", "QwertY1234");

const users = app.getUsers();

const items = [
  {
    product: books[0],
    quantity: 1,
  },
  {
    product: books[1],
    quantity: 2,
  },
  {
    product: books[2],
    quantity: 1,
  },
];

app.createOrder(items, users[0]);

app.showDatabase();
