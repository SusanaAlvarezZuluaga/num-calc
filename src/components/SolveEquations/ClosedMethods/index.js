import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserInputs from './UserInputs';
import Solutions from './Solutions';

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
      <div className="simple-header">
        <Link
          className="arrow-back-holder"
          to="/solve-equation"
          style={{ textDecoration: 'none' }}
        >
          <span className="material-icons arrow-back">arrow_back</span>
        </Link>
        <div>Closed Methods</div>
      </div>
      <div className="page-columns">
        <div className="column-1">
          <div>
            <div className="section-title">Definition</div>
            <div>
              As stated previously, closed methods are methods to solve one
              variable equations. What characterizes these methods is that in
              order to work, they require an interval, inside of which there is
              a root. Usually to find an interval which containts a root the
              graphical method is used.
            </div>
          </div>
          <br />
          <div className="requirements">
            <div className="section-title">Requirements</div>
            In order for num-calc to calulate the root of an equation you need
            to provide the following information and satisfy the following
            conditions:
            <ul className="method-conditions">
              <br />
              <li>
                <span className="req-title"> f(x): </span> A valid function in
                terms of x. Math functions such as log(x), exp(x) and all the
                trionometric functions are accepted. Exponents are also accepted
                using the ^ symbol. Make sure to only used lowercase letters
              </li>
              <br />
              <li>
                <span className="req-title"> Max Iterations: </span> The maximum
                number of iteratios the numerical methods can perform. Thins
                number should be a positive integer greater than
              </li>
              <br />
              <li>
                <span className="req-title"> Inferior limit: </span>A value that
                the method uses to start to search for the root. This value
                should be any real number.
              </li>
              <br />
              <li>
                <span className="req-title"> Superior limit:</span> A value that
                must be bigger than the inferior limit. The user needs to make
                sure that there is a root in the interval [limInf, limSup] and
                also that f(supLim)*f(infLim) {'<0'}
              </li>
              <br />
              <li>
                <span className="req-title"> Error: </span>
                The maximum error allowed by the user.This number must be any
                real number bigger than cero. The numerical method makes sure
                that the answer provided has a lower error than the one allowed
                by the user.
              </li>
            </ul>
          </div>
        </div>
        <div className="column-2">
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
          {showSolutionNumClicks !== 0 ? (
            <Solutions
              showSolutionNumClicks={showSolutionNumClicks}
              equation={equation}
              limInf={limInf}
              limSup={limSup}
              numIterations={numIterations}
              tolerance={tolerance}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default ClosedMethods;
