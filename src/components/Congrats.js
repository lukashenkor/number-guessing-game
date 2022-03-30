import {Link, useLocation} from "react-router-dom";
import { useEffect } from "react";

const Congrats = () => {
  const location = useLocation()
  const { guessNumber } = location.state
  return (
    <div>
      <h1>Congratulations! You won!</h1>
      <h2>Guess number was: { guessNumber }</h2>
      <div className="links">
        <Link to="/settings">
          <button className="btn btn-success">Play Again</button>
        </Link>
        <Link to="/">
          <button className="btn">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Congrats;
