import React from 'react';
// import PropTypes from 'prop-types';
import Buttons from '../Buttons';
import s from './FeedbackOption.module.css';

export default function FeedbackOptions({
  entries,
  onIncreaseFbAmount,
  onDecreaseFbAmount,
}) {
  return (
    <>
      <ul className={s.list}>
        {entries.map(entries => (
          <li key={entries[0]} className={s.item}>
            <Buttons
              fbName={entries[0]}
              fbAmount={entries[1]}
              onDecreaseFbAmount={onDecreaseFbAmount}
              onIncreaseFbAmount={onIncreaseFbAmount}
            ></Buttons>
          </li>
        ))}
      </ul>
    </>
  );
}

// FeedbackOptions.propTypes = {
//   entries: PropTypes.arrayOf(PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number
//   ]))
// };
