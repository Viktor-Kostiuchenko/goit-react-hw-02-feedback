import PropTypes from 'prop-types';
import Buttons from '../Buttons/Buttons';
import s from './FeedbackOption.module.css';

export default function FeedbackOptions({
  good,
  neutral,
  bad,
  onIncreaseFbAmount,
  onDecreaseFbAmount,
}) {
  return (
    <>
      <ul className={s.list}>
        <li className={s.item}>
          <Buttons
            fbAmount={good}
            fbName={'good'}
            onDecreaseFbAmount={onDecreaseFbAmount}
            onIncreaseFbAmount={onIncreaseFbAmount}
          ></Buttons>
        </li>
        <li className={s.item}>
          <Buttons
            fbAmount={neutral}
            fbName={'neutral'}
            onDecreaseFbAmount={onDecreaseFbAmount}
            onIncreaseFbAmount={onIncreaseFbAmount}
          ></Buttons>
        </li>
        <li className={s.item}>
          <Buttons
            fbAmount={bad}
            fbName={'bad'}
            onDecreaseFbAmount={onDecreaseFbAmount}
            onIncreaseFbAmount={onIncreaseFbAmount}
          ></Buttons>
        </li>
      </ul>
    </>
  );
}

FeedbackOptions.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
