import React, { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAdding = e => {
    const { id } = e.target;
    this.setState({ [id]: this.state[id] + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let result = 0;
    if (!(good / this.countTotalFeedback())) return result;
    else return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <div className={css.feedback}>
          <button id="good" type="button" onClick={this.handleAdding}>
            Good
          </button>
          <button id="neutral" type="button" onClick={this.handleAdding}>
            Neutral
          </button>
          <button id="bad" type="button" onClick={this.handleAdding}>
            Bad
          </button>
        </div>
        <h3>Statistics</h3>
        <div className={css.statistics}>
          <span>Good: {this.state.good}</span>
          <span>Neutral: {this.state.neutral}</span>
          <span>Bad: {this.state.bad}</span>
          <span>Total: {this.countTotalFeedback()}</span>
          <span>
            Positive feedback: {this.countPositiveFeedbackPercentage()}%
          </span>
        </div>
      </>
    );
  }
}

export default Feedback;
