import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserInputs from './UserInputs';
import Solutions from './Solutions';
function SolveSystemsOfEquations() {
  /* INPUTS STATES */
  const [Ab, setAb] = useState('');
  const [showSolutionNumClicks, setShowSolutionNumClicks] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    setShowSolutionNumClicks(showSolutionNumClicks + 1);
  }
  function handleClear() {
    setAb('');
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
        <div>Solve systems of linear equations</div>
      </div>
      <div className="method-explanation">bla bla bla.</div>
      <div className="column-2">
        <UserInputs
          showSolutionNumClicks={showSolutionNumClicks}
          Ab={Ab}
          setAb={setAb}
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
          <Solutions showSolutionNumClicks={showSolutionNumClicks} Ab={Ab} />
        ) : null}
      </div>
    </div>
  );
}
export default SolveSystemsOfEquations;
