import {Link, useLocation} from "react-router-dom";

const Gameover = () => {
  const location = useLocation()
  const { guessNumber } = location.state

  return (
    <div className="wrapper">
      <h1>Game Over</h1>
      <h2>Guess number was: { guessNumber }</h2>
      <p>
        <Link to="/settings">
          <button className="btn">
            Play Again
          </button>
        </Link>
        <Link to="/">
          <button className="btn">
            Home
          </button>
        </Link>
      </p>
    </div>
  );
};

export default Gameover;
