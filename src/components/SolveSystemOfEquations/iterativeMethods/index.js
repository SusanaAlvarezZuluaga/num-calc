import { useState } from 'react';
import UserInputs from './UserInputs';
import Solutions from './Solutions';
function IterativeMethods() {
  /* INPUTS STATES */
  const [A, setA] = useState('');
  const [B, setB] = useState('');
  const [showSolutionNumClicks, setShowSolutionNumClicks] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    setShowSolutionNumClicks(showSolutionNumClicks + 1);
  }
  function handleClear() {
    setA('');
    setB('');
  }
  return (
    <div>
      <div className="simple-header">Iterative Methods</div>
      <div className="method-explanation">bla bla bla.</div>
      <div className="closed-methods-form-holder">
        <UserInputs
          showSolutionNumClicks={showSolutionNumClicks}
          A={A}
          setA={setA}
          B={B}
          setB={setB}
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
          <div>
            <div></div>
            <Solutions
              showSolutionNumClicks={showSolutionNumClicks}
              A={A}
              B={B}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default IterativeMethods;
