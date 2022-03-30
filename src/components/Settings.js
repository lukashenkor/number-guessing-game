import {Link} from "react-router-dom";
import {useState} from "react";


function randomInteger(lowLevel, highLevel) {
    return Math.floor(Math.random() * (highLevel - lowLevel + 1)) + lowLevel;
}

const Settings = () => {
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(10);
  const [attemptCount, setAttemptCount] = useState(5);

  // parse valid input number from event else return empty string
  const parseInputNumber = (event) => {
    const input = event.target.value;
    if (input === "") {
      return "";
    }
    const parsed = parseInt(input);
    if (isNaN(parsed)) {
      return "";
    }
    return parsed;
  };

  return (
    <div className="wrapper">
      <Link to="/">
        <button className="btn">Go home</button>
      </Link>
      <h3>Setup some settings</h3>
      <div className="wrapper-settings">
        <label>
          Low level:
          <input type="text" value={ minNumber } onChange={ (e => setMinNumber(parseInputNumber(e))) }/>
        </label>
        <label>
          High level:
          <input type="text" value={ maxNumber } onChange={ (e => setMaxNumber(parseInputNumber(e))) }/>
        </label>
        <label>
          Attempts count:
          <input type="text" value={ attemptCount } onChange={ (e => setAttemptCount(parseInputNumber(e))) }/>
        </label>
      </div>
      <Link to={ '/playground' }
            state={{
              minNumber: minNumber,
              maxNumber: maxNumber,
              attemptCount: attemptCount,
              guessNumber: randomInteger(minNumber, maxNumber)
      }}
      >
        <button className="btn btn-success">Play</button>
      </Link>
    </div>
  );
};

export default Settings;
