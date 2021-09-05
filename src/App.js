import React, { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';


function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return (good + neutral + bad)
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  const handleIncrement = (evt) => {
      const feedBackType = evt.target.textContent.toLowerCase();
      if(feedBackType === 'good') {
        setGood((prevGood) => (prevGood + 1));

      } else if(feedBackType === 'neutral') {
        setNeutral((prevNeutral) => (prevNeutral + 1));

      } else if (feedBackType === 'bad') {
        setBad((prevBad) => (prevBad + 1));
      };
  };

    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
    return (
        <>
          <Section title="Please leave feedback">
            <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={handleIncrement} />
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
          </Section>
        </>
    )
}

export default App;
