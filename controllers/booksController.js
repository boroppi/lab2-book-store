const Book = require("../models/book");
const mongoose = require("mongoose");

exports.index = (req, res) => {
  Book.find()
    .then(books => {
      res.render("books/index", {
        books: books,
        title: "Archive"
      });
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/");
    });
};

exports.show = (req, res) => {
  Book.findById(req.params.id)
    .then(book => {
      res.render("books/show", {
        book: book,
        title: book.title
      });
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/");
    });
};

exports.new = (req, res) => {
  res.render("books/new", {
    title: `New Book`
  });
};

exports.edit = (req, res) => {
  Book.findById(req.params.id)
    .then(book => {
      res.render("books/edit", {
        title: `Edit ${book.title}`,
        book: book
      });
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/");
    });
};

exports.create = (req, res) => {
  Book.create(req.body.book)
    .then(() => {
      req.flash("success", "New book was created successfully.");
      res.redirect("/books");
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/books/new");
    });
};

exports.update = (req, res) => {
  Book.updateOne(
    {
      _id: req.body.id
    },
    req.body.book,
    {
      runValidators: true
    }
  )
    .then(() => {
      req.flash("success", "The book was updated successfully.");
      res.redirect(`/books/${req.body.id}`);
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect(`/books/${req.body.id}/edit`);
    });
};

exports.destroy = (req, res) => {
  Book.deleteOne({
    _id: req.body.id
  })
    .then(() => {
      req.flash("success", "The book was deleted successfully.");
      res.redirect("/books");
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect(`/books`);
    });
};
