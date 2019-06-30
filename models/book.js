// We will need our mongoose library
const mongoose = require(`mongoose`);

// Our schema
const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: false
    },
    publisher: {
      type: String,
      required: false
    },
    genre: {
      type: String,
      enum: ["SCI-FI", "DRAMA", "NOVEL", "ART", "HISTORY", "BIOGRAPHY", "POEM"],
      default: "SCI-FI"
    }
  },
  {
    timestamps: true
  }
);

// Exporting our resource model
module.exports = mongoose.model("Book", BookSchema);
