var mongoose = require ('mongoose');

var Todo = mongoose.model("Todo", {
    text: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    completed: {
      default: false,
      type: Boolean
    },
    completedAt: {
      default: null,
      type: Number
    }
  });

  module.exports = {Todo};