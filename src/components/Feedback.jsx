import React from 'react';

function Feedback({ feedback, total, positive }) {
  return (
    total > 0 && (
      <div className="stats-container">
        <ul className="stats-row">
          {Object.keys(feedback).map((fbItem) => (
            <li key={fbItem} className="stats">
              {fbItem.charAt(0).toUpperCase() + fbItem.slice(1)}: {feedback[fbItem]}
            </li>
          ))}
        </ul>
        <ul className="stats-row">
          <li className="stats">Total: {total}</li>
          <li className="stats">Positive: {positive}%</li>
        </ul>
      </div>
    )
  );
}

export default Feedback;
