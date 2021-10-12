import React, { useState, useEffect } from "react";
import "./index.css";
import API from "../../utils/API";

function ControlPanel() {
  const [currentScore, setCurrentScore] = useState({
    team1: "",
    team1_score: 0,
    team2: "",
    team2_score: 0
  })

  useEffect(() => {
    console.log(currentScore)
  }, [currentScore]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCurrentScore({ ...currentScore, [name]: value })
  };

  function setScore() {
    API.saveScore({
      team1: currentScore.team1,
      team1_score: currentScore.team1_score,
      team2: currentScore.team2,
      team2_score: currentScore.team2_score
    })
      .catch(err => console.log(err));
  }

  return (
    <section className="control-panel">
      <div className="container content is-size-2">
        <p>Team 1</p>
        <span className="mr-2">Name</span>
        <input name="team1" className="mr-2" onChange={handleInputChange} />
        <span className="mr-2">Score</span>
        <input name="team1_score" className="mr-2" onChange={handleInputChange} />
        <br />
        <button onClick={setScore} className="my-3">Set</button>
        <br />
        <p>Team 2</p>
        <span className="mr-2">Name</span>
        <input name="team2" className="mr-2" onChange={handleInputChange} />
        <span className="mr-2">Score</span>
        <input name="team2_score" className="mr-2" onChange={handleInputChange} />
      </div>
    </section>
  );
}


export default ControlPanel;
