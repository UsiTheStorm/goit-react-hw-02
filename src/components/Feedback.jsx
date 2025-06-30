import React from 'react';

function Feedback() {
  return (
    <div className="stats-container">
      <ul className="stats-row">
        <li className="stats">Good: 0</li>
        <li className="stats">Neutral: 0</li>
        <li className="stats">Bad: 0</li>
      </ul>
      <ul className="stats-row">
        <li className="stats">Total: 0</li>
        <li className="stats">Positive:0%</li>
      </ul>
    </div>
  );
}

export default Feedback;
