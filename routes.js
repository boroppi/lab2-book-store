// Our Express app module
const express = require("express");
const app = express();

// Importing the pageRoutes
const booksRoutes = require("./routes/books");

// Our home page
app.get("/", (req, res) => {
  res.render("pages/home");
});

// registering paageRoutes
app.use("/books", booksRoutes);

// Exporting the changes
module.exports = app;
