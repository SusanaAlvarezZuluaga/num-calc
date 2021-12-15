import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserInputs from './UserInputs';
import Solutions from './Solutions';
function Interpolation() {
  /* INPUTS STATES */
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [showSolutionNumClicks, setShowSolutionNumClicks] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    setShowSolutionNumClicks(showSolutionNumClicks + 1);
  }
  function handleClear() {
    setX('');
    setY('');
    setShowSolutionNumClicks(0);
  }
  return (
    <div>
      <div className="simple-header">
        <Link
          className="arrow-back-holder"
          to="/"
          style={{ textDecoration: 'none' }}
        >
          <span className="material-icons arrow-back">arrow_back</span>
        </Link>
        <div>Interpolation</div>
      </div>
      <div className="method-explanation">
        Interpolation is used to fit some data points to a known curve.
      </div>
      <div className="closed-methods-form-holder">
        <UserInputs
          showSolutionNumClicks={showSolutionNumClicks}
          x={x}
          setX={setX}
          y={y}
          setY={setY}
          handleSubmit={handleSubmit}
        />
        <div>
          <button
            type="submit"
            form="closed-methods-form"
            className="form-button"
          >
            find solution
          </button>
          <button className="form-button" onClick={handleClear}>
            clear
          </button>
        </div>
        {showSolutionNumClicks !== 0 ? (
          <Solutions
            showSolutionNumClicks={showSolutionNumClicks}
            x={x}
            y={y}
          />
        ) : null}
      </div>
    </div>
  );
}
export default Interpolation;
