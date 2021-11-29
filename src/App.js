import React, { Component } from 'react';
import Section from './components/section/Section';
import FeedbackList from './components/feedback/FeedbackList';
import StatisticList from './components/statistics/StatisticList';
import Notification from './components/notification/Notification';
import imageUrl from './images/feedback.png';

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
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const good = this.state.good;
    const total = this.countTotalFeedback();
    return Math.trunc((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackList
            good={good}
            neutral={neutral}
            bad={bad}
            onIncreaseFbAmount={this.increaseFbAmount}
            onDecreaseFbAmount={this.decreaseFbAmount}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification url={imageUrl} />
          ) : (
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