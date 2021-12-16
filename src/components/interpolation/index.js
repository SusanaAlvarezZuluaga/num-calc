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
        <div>Polynomial Interpolation</div>
      </div>
      <div className="page-columns">
        <div className="column-1">
          <div>
            <div className="section-title">Definition</div>
            <div>
              Interpolation consists in given a set of points finding a
              polynomial that passes through all of them. Num-calc will find the
              polynomial using Lagrange's method and Newton's method.
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
                <span className="req-title"> X: </span> An array that includes
                all the x values of the points. The values should be separated
                by commas and the array should be defined using square brackets:
                Imagine that your set of points is: (1,1),(2,4),(3,9)
                <br />
                Then the X array should be: [1,2,3].
              </li>
              <br />
              <li>
                <span className="req-title"> Y: </span> An array that includes
                all the y values of the data points. Following the example
                provided above, if your set of points is:(1,1),(2,4),(3,9)
                <br />
                Then the Y array should be: [1,4,9]
              </li>
            </ul>
          </div>
        </div>
        <div className="column-2">
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
    </div>
  );
}
export default Interpolation;
