import { useState } from 'react';
import UserInputs from './UserInputs';
import Solutions from './Solutions';
function FactorizationMethods() {
  /* INPUTS STATES */
  const [Ab, setAb] = useState('');
  const [showSolutionNumClicks, setShowSolutionNumClicks] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    setShowSolutionNumClicks(showSolutionNumClicks + 1);
  }
  function handleClear() {
    setAb('');
  }
  return (
    <div>
      <div className="simple-header">Factorization Methods</div>
      <div className="method-explanation">bla bla bla.</div>
      <div className="closed-methods-form-holder">
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
        {showSolutionNumClicks != 0 ? (
          <Solutions showSolutionNumClicks={showSolutionNumClicks} Ab={Ab} />
        ) : null}
      </div>
    </div>
  );
}
export default FactorizationMethods;
