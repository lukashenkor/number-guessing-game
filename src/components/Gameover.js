import {Link, useLocation} from "react-router-dom";

const gameoverBlock = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#333",
  fontWeight: "bold",
  textAlign: "center",
  padding: "2rem",
  boxSizing: "border-box",
  position: "relative",
  zIndex: "1",
}

const buttonBlock = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "20px",
  marginBottom: "20px",
  width: "200px",
};

const Gameover = () => {
  const location = useLocation()
  const { guessNumber } = location.state

  return (
    <div className="wrapper" style={gameoverBlock}>
      <h1>Game Over</h1>
      <h2>Guess number was: { guessNumber }</h2>
      <p style={buttonBlock}>
        <Link to="/settings">
          <button className="btn btn-success">
            Play Again
          </button>
        </Link>
        <Link to="/">
          <button className="btn btn-primary">
            Home
          </button>
        </Link>
      </p>
    </div>
  );
};

export default Gameover;
