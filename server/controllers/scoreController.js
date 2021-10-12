const ObjectId = require("mongoose").Types.ObjectId;
const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Score
      .find({})
      .sort({ _id: -1 })
      .populate({ path: "score" })
      .then(score => {
        res.json({ score });
      })
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Score
      .create(req.body)
      .then((score) => {
        res.json(score);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Score
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(score => {
        console.log(score);
        res.json(score);
      })
      .catch(err => res.status(422).json(err));
  },
};
