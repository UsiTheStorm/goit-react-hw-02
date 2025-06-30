import { useState, useEffect } from 'react';

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

  const [feedback, setFeedback] = useState(() => {
    try {
      const storedCounts = localStorage.getItem('feedback');
      return storedCounts ? JSON.parse(storedCounts) : initialState;
    } catch (error) {
      console.error('Can`t load from localStorage:', error);
      return initialState;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('feedback', JSON.stringify(feedback));
    } catch (error) {
      console.error('Can`t save in localStorage:', error);
    }
  }, [feedback]);

  const totalFeedback = Object.values(feedback).reduce((acc, cur) => acc + cur, 0);

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  function updateFeedback(feedbackType) {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  }

  function resetFeedback() {
    setFeedback(initialState);
  }

  return (
    <div className="App">
      <Description />
      <Options
        onFeedbackUpdate={updateFeedback}
        feedback={feedback}
        onReset={resetFeedback}
        total={totalFeedback}
      />
      <Feedback feedback={feedback} total={totalFeedback} positive={positiveFeedback} />
    </div>
  );
}

export default App;
