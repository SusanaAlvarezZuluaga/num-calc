import { useState } from 'react';
import UserInputs from './UserInputs';
import Solutions from './Solutions';
import './closed-methods.css';
import BisectionMethod from '../../../algorithms/BisectionMethod';
import FalsePositionnMethod from '../../../algorithms/FalsePositionMethod';

function ClosedMethods() {
  /* INPUTS STATES */
  const [equation, setEquation] = useState('');
  const [numIterations, setNumIterations] = useState('');
  const [limInf, setLimInf] = useState('');
  const [limSup, setLimSup] = useState('');
  const [tolerance, setTolerance] = useState('');
  const [showSolutionNumClicks, setShowSolutionNumClicks] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    setShowSolutionNumClicks(showSolutionNumClicks + 1);
  }
  function handleClear() {
    setEquation('');
    setNumIterations('');
    setLimInf('');
    setLimSup('');
    setTolerance('');
    setShowSolutionNumClicks(0);
  }
  return (
    <div>
      <div className="simple-header">Closed Methods</div>
      <div className="method-explanation">
        Closed methods are methods that in order to work, they require an
        interval, inside of which there is a root. Usually to find an interval
        which containts a root the graphical method is used. Below you can graph
        the function of interest to find an interval that contains a root and
        then use this interval to find a more accurate solution
      </div>
      <div className="closed-methods-form-holder">
        <UserInputs
          equation={equation}
          setEquation={setEquation}
          numIterations={numIterations}
          setNumIterations={setNumIterations}
          limInf={limInf}
          setLimInf={setLimInf}
          limSup={limSup}
          setLimSup={setLimSup}
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
          <div>
            <div></div>
            <Solutions
              showSolutionNumClicks={showSolutionNumClicks}
              equation={equation}
              limInf={limInf}
              limSup={limSup}
              numIterations={numIterations}
              tolerance={tolerance}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default ClosedMethods;
