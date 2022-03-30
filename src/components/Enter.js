import {Link} from "react-router-dom";

const Enter = () => {
  return (
    <div>
      <h1>Play Number Guessing Game!</h1>
      <Link to="/play">
        <button type="button">
          Press it!
        </button>
      </Link>
    </div>
  );
}

export default Enter;