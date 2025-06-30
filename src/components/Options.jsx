import React from 'react';

function Options({ onFeedbackUpdate, feedback, onReset, total }) {
  console.log(feedback);
  return (
    <div className="btn-group">
      {Object.keys(feedback).map((btn) => (
        <button className="btn feedback" id={btn} key={btn} onClick={() => onFeedbackUpdate(btn)}>
          {btn.charAt(0).toUpperCase() + btn.slice(1)}
        </button>
      ))}
      <button className="btn reset" onClick={onReset} disabled={!total}>
        Reset
      </button>
    </div>
  );

  //     <div className="btn-group">
  //       <button className="btn feedback" id="good">
  //         Good
  //       </button>
  //       <button className="btn feedback" id="neutral">
  //         Neutral
  //       </button>
  //       <button className="btn feedback" id="bad">
  //         Bad
  //       </button>
  //       <button className="btn reset">Reset</button>
  //     </div>
  //   );
}

export default Options;
