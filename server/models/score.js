const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  team1: { type: String },
  team1_score: { type: Number },
  team2: { type: String },
  team2_score: { type: Number }
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;
