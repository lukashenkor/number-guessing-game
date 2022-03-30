import { useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Playground = (props) => {
  const location = useLocation()
  const { lowLevel, highLevel, attemptCount, guessNumber } = location.state
  const [attemptsLeft, setAttemptsLeft] = useState(attemptCount)
  const [printedNumber, setPrintedNumber] = useState('');
  const navigator = useNavigate();

  const makeGuess = () => {
    console.log('guessNumber: ', guessNumber)
    if (printedNumber === '') {
      return
    }
    setPrintedNumber('');
    if (printedNumber === guessNumber) {
      console.log("Угадал!")
      navigator('/congrats', { state: {guessNumber: guessNumber}})
    } else if (attemptsLeft === 1) {
      console.log("У вас закончились попытки")
      navigator('/gameover', { state: {guessNumber: guessNumber}})
    } else {
      console.log("Не угадал")
      setAttemptsLeft(attemptsLeft - 1)
    }
  }

  const parseInputNumber = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (!value || isNaN(value)) {
      return ''
    }
    return parseInt(e.target.value);
  }

  function onKeyDownHandler(e) {
    if (e.key === 'Enter') {
      makeGuess()
    }
  }

  return (
    <div className="wrapper">
      <Link to="/">
        <button type="button" className="btn">Go back</button>
      </Link>
      <h2>Let's Play</h2>
      <h3>Guess a number between {lowLevel} and {highLevel}</h3>
      <label>
        <input type="text" value={printedNumber} onChange={ (e => setPrintedNumber(parseInputNumber(e))) } onKeyDown={(e) => onKeyDownHandler(e)}/>
      </label>
      <h4>Attempts left: { attemptsLeft }</h4>
      <button className="btn btn-primary"
              onClick={makeGuess}
      >
        Make a guess
      </button>
    </div>
  );
};

export default Playground;
