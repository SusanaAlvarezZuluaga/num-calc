import { useState } from 'react';
import UserInputs from './UserInputs';
import Solutions from './Solutions';

function OpenMethods() {
  /* INPUTS STATES */
  const [equation, setEquation] = useState('');
  const [numIterations, setNumIterations] = useState('');
  const [x0, setX0] = useState('');
  const [tolerance, setTolerance] = useState('');
  const [showSolutionNumClicks, setShowSolutionNumClicks] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    setShowSolutionNumClicks(showSolutionNumClicks + 1);
  }
  function handleClear() {
    setEquation('');
    setNumIterations('');
    setX0('');
    setTolerance('');
    setShowSolutionNumClicks(0);
  }
  return (
    <div>
      <div className="simple-header">Open Methods</div>
      <div className="method-explanation">
        Open methods are methods that in order to work, they require a very good
        intial value. Usually a good initial value the graphical method is used.
        Below you can graph the function of interest to find an a good initial
        solution and then use it in the methods below to find a more accurate
        solution
      </div>
      <div className="closed-methods-form-holder">
        <UserInputs
          equation={equation}
          setEquation={setEquation}
          numIterations={numIterations}
          setNumIterations={setNumIterations}
          x0={x0}
          setX0={setX0}
          tolerance={tolerance}
          setTolerance={setTolerance}
          handleSubmit={handleSubmit}
          handleClear={handleClear}
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
          <Solutions
            showSolutionNumClicks={showSolutionNumClicks}
            equation={equation}
            x0={x0}
            numIterations={numIterations}
            tolerance={tolerance}
          />
        ) : null}
      </div>
    </div>
  );
}
export default OpenMethods;
