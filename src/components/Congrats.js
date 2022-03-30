import {Link, useLocation} from "react-router-dom";

const congratsBlock = {
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

const Congrats = () => {
  const location = useLocation()
  const { guessNumber } = location.state
  return (
    <div style={congratsBlock}>
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
