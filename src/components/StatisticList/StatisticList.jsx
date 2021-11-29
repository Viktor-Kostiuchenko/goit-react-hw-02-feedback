import React from 'react';
import PropTypes from 'prop-types';
import s from './StatisticList.module.css';

export default function StatisticList({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <>
      <ul className={s.list}>
        <li className={`${s.item} ${s.good}`}>
          <p>Good</p>
          <span className={s.number}>{good}</span>
        </li>
        <li className={`${s.item} ${s.neutral}`}>
          <p>Neutral</p>
          <span className={s.number}>{neutral}</span>
        </li>
        <li className={`${s.item} ${s.bad}`}>
          <p>Bad</p>
          <span className={s.number}>{bad}</span>
        </li>
        <li className={`${s.item} ${s.total}`}>
          <p>Total</p>
          <span className={s.number}>{totalFeedback()}</span>
        </li>
        <li className={`${s.item} ${s.positive}`}>
          <p>Positive</p>
          <span className={s.number}>{positiveFeedback()}%</span>
        </li>
      </ul>
    </>
  );
}

StatisticList.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
