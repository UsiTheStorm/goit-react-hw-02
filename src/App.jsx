import { useState } from 'react';

import './App.css';

import Description from './components/Description';
import Options from './components/Options';
import Feedback from './components/Feedback';

function App() {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(initialState);

  const totalFeedback = Object.values(feedback).reduce((acc, cur) => acc + cur, 0);

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  function updateFeedback(feedbackType) {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
    console.log(feedback);
  }

  function resetFeedback() {
    setFeedback(initialState);
  }

  return (
    <div className="App">
      <Description />
      <Feedback />
    </div>
  );
}

export default App;
