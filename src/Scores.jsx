import React from "react";

const Scores = props => (
  <div>
    {props.scores.map(scores => (
      <h5>
        Date: {scores.date} / Score: {scores.score}
      </h5>
    ))}
  </div>
);

export default Scores;
