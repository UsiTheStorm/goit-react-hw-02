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


  function updateFeedback(feedbackType) {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
    console.log(feedback);
  }

  return (
    <div className="App">
      <Description />
      <Options />
      <Feedback />
    </div>
  );
}

export default App;
