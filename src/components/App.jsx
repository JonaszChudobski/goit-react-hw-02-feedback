import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleAdding = e => {
    if (e.currentTarget.id === 'good') {
      setGood(good + 1);
    } else if (e.currentTarget.id === 'neutral') {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return (
      Math.round((good / countTotalFeedback(good, neutral, bad)) * 100) || 0
    );
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleAdding}></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback(good, neutral, bad) !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback(good, neutral, bad)}
            positivePercentage={countPositiveFeedbackPercentage(
              good,
              neutral,
              bad
            )}
          ></Statistics>
        ) : (
          <Notification />
        )}
      </Section>
    </>
  );
};
