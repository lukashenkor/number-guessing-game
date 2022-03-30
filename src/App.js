import { Link } from "react-router-dom";
import './style.css'

const App = () => {
  return (
    <div className="wrapper">
      <h1>Play Number Guessing Game!</h1>
      <Link to="/settings">
        <button className="btn btn-primary"
                type="button"
        >
          Press to play!
        </button>
      </Link>
    </div>
  )
}

export default App;
