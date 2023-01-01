const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    cName: {
      type: String,
      required: true,
    },
    cDescription: {
      type: String,
      required: true,
    },
    // cParentID: {
    //   type: Number,
    //   required: true,
    // },
    cImage: {
      type: String,
    },
    cStatus: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const categoryModel = mongoose.model("categories", categorySchema);
module.exports = categoryModel;
