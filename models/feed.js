const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [15, "Minimum longer than 15 characters"],
    },
    message: {
      type: String,
      required: true,
      minLength: [40, "Minimum longer than 40 characters"],
    },
  },
  { timestamps: true }
);

const FEED = mongoose.model("FEED", FeedSchema);

module.exports = {
  FEED,
};
