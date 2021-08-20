const { FEED } = require("../models/feed");

const Homepage = (req, res) => {
  if (req.method === "GET") {
    FEED.find()
      .then((results) => res.render("index", { results, error: null }))
      .catch((err) => console.log(err));
  }
  if (req.method === "POST") {
    const feed = new FEED(req.body);
    feed
      .save()
      .then(() => res.redirect("/feed"))
      .catch((err) => {
        FEED.find()
          .then((results) =>
            res.render("index", { results, error: err.errors })
          )
          .catch((err) => console.log(err));
      });
  }
};

const oneFeed = (req, res) => {
  FEED.findById({ _id: req.params.id })
    .then((result) => res.render("oneFeed", { result }))
    .catch((err) => console.log(err));
};

const deleteFeed = (req, res) => {
  FEED.findByIdAndDelete({ _id: req.params.id })
    .then(() => res.redirect("/feed"))
    .catch((err) => console.log(err));
};

const editFeed = (req, res) => {
  if (req.method === "GET") {
    FEED.findById({ _id: req.params.id })
      .then((result) => res.render("updateFeed", { result}))
      .catch((err) => console.log(err));
  }
  if (req.method === "POST") {
    FEED.findByIdAndUpdate({ _id: req.params.id })
      .then((result) => {
        result.name = req.body.name;
        result.message = req.body.message;
        result
          .save()
          .then(() => res.redirect("/feed/" + req.params.id))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }
};

module.exports = {
  Homepage,
  oneFeed,
  deleteFeed,
  editFeed,
};
