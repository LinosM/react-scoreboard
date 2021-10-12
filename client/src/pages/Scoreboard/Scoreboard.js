import React, { useState, useEffect } from "react";
import "./index.css";
import API from "../../utils/API";

function Scoreboard() {
  const [currentScore, setCurrentScore] = useState({
    team1: "",
    team1_score: 0,
    team2: "",
    team2_score: 0
  })

  useEffect(() => {
    setInterval(function () {
      API.getScore()
        .then(res => {
          setCurrentScore(res.data.score[0])
          console.log(res.data.score)
        })
        .catch(err => console.log(err));
    }, 3000);
  }, []);

  return (
    <div>
      <div className='container_score'>
        <div className='t1-score'>
          {currentScore.team1_score}
        </div>
        <div className='t1-name'>
          {currentScore.team1}
        </div>
        <div className='t2-name'>
          {currentScore.team2}
        </div>
        <div className='t2-score'>
          {currentScore.team2_score}
        </div>
      </div>
    </div>
  );
}


export default Scoreboard;
