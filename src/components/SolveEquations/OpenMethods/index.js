import { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="simple-header">
        <Link
          className="arrow-back-holder"
          to="/solve-equation"
          style={{ textDecoration: 'none' }}
        >
          <span className="material-icons arrow-back">arrow_back</span>
        </Link>
        <div>Open Methods</div>
      </div>
      <div>
        <div className="page-columns">
          <div className="column-1">
            <div>
              <div className="section-title">Definition</div>
              <div>
                As stated previously, open methods are methods to solve one
                variable equations that in order to work, they require a very
                good intial value. Usually a good initial value is found using
                the graphical method.
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
                  trionometric functions are accepted. Exponents are also
                  accepted using the ^ symbol. Make sure to only used lowercase
                  letters
                </li>
                <br />
                <li>
                  <span className="req-title"> Max Iterations: </span> The
                  maximum number of iteratios the numerical methods can perform.
                  Thins number should be a positive integer greater than
                </li>
                <br />
                <li>
                  <span className="req-title">X0: </span>An initial value that
                  is close to the real root. The method uses this value to start
                  searching for the root. This value should be any real number.
                </li>
                <br />
                <li>
                  <span className="req-title"> Error: </span>
                  The maximum error allowed by the user. This number must be any
                  real number bigger than cero. The numerical method makes sure
                  that the answer provided has a lower error than the one
                  allowed by the user.
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
            {showSolutionNumClicks !== 0 ? (
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
      </div>
    </div>
  );
}
export default OpenMethods;
