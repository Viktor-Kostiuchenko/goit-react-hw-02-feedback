import s from './Buttons.module.css';

export default function Buttons({
  fbAmount,
  fbName,
  onDecreaseFbAmount,
  onIncreaseFbAmount,
}) {
  return (
    <>
      <button
        className={s.button}
        onClick={() => onDecreaseFbAmount(fbName)}
        disabled={fbAmount === 0 && true}
      >
        -
      </button>
      <span className={s.name}>{fbName}</span>
      <button className={s.button} onClick={() => onIncreaseFbAmount(fbName)}>
        +
      </button>
    </>
  );
}
