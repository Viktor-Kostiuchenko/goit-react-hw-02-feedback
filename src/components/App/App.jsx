import React, { Component } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import StatisticList from '../StatisticList';
import Notification from '../Notification';
import imageUrl from '../../images/feedback.png';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseFbAmount = fbName => {
    this.setState(prevState => ({
      [fbName]: prevState[fbName] + 1,
    }));
  };

  decreaseFbAmount = fbName => {
    this.setState(prevState => ({
      [fbName]: prevState[fbName] - 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.trunc((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const noFeedbacks = this.countTotalFeedback() === 0;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.entries(this.state)}
            onIncreaseFbAmount={this.increaseFbAmount}
            onDecreaseFbAmount={this.decreaseFbAmount}
          />
        </Section>
        <Section title="Statistics">
          {noFeedbacks && <Notification url={imageUrl} />}
          {!noFeedbacks && (
            <StatisticList
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={this.countTotalFeedback}
              positiveFeedback={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
