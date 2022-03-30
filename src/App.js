import { Link } from "react-router-dom";
import './style.css'

const App = () => {
  return (
    <div className="wrapper">
      <h1>Play Number Guessing Game!</h1>
      <Link to="/settings">
        <button className="btn"
                type="button"
                style={{ backgroundColor: "#0070e7" }}
        >
          Press to play!
        </button>
      </Link>
    </div>
  )
}

export default App;
