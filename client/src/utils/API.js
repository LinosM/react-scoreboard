import axios from "axios";

export default {
  getScore: function() {
    return axios.get("/api/score");
  },
  saveScore: function(scoreData) {
    return axios.post("/api/score", scoreData);
  },
};
