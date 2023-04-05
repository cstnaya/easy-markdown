const mongoose = require("mongoose");

const articleScema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  authorId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "untitled"
  },
  content: {
    type: String,
  },
  deletedAt: {
    type: Date,
    required: false,
  },
  updatedAt: {
    type: Date,
    required: true,
  }
});

module.exports = mongoose.model("Article", articleScema);
