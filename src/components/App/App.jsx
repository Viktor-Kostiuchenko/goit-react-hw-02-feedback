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
    return Object.values(this.state).reduce((total, value) => total + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.trunc((good / total) * 100);
  };

  render() {
    const increaseFbAmount = this.increaseFbAmount;
    const decreaseFbAmount = this.decreaseFbAmount;
    const totalFb = this.countTotalFeedback;
    const positiveFb = this.countPositiveFeedbackPercentage;
    const noFeedbacks = this.countTotalFeedback() === 0;
    const options = Object.entries(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onIncreaseFbAmount={increaseFbAmount}
            onDecreaseFbAmount={decreaseFbAmount}
          />
        </Section>
        <Section title="Statistics">
          {noFeedbacks && <Notification url={imageUrl} />}
          {!noFeedbacks && (
            <StatisticList
              options={options}
              totalFeedback={totalFb}
              positiveFeedback={positiveFb}
            />
          )}
        </Section>
      </>
    );
  }
}
