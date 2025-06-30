import React from 'react';

function Options() {
  return (
    <div className="btn-group">
      <button className="btn feedback" id="good">
        Good
      </button>
      <button className="btn feedback" id="neutral">
        Neutral
      </button>
      <button className="btn feedback" id="bad">
        Bad
      </button>
      <button className="btn reset">Reset</button>
    </div>
  );
}

export default Options;
