import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserInputs from './UserInputs';
import Solutions from './Solutions';
import exampleSysEq from '../../assets/example_system_of_equations.png';
import exampleSysEqMatrix from '../../assets/example_matrix_system_of_equations.png';
import axb from '../../assets/AX=B.png';
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
      <div className="page-columns">
        <div className="column-1">
          <div className="section-title">Definition</div>
          <div>
            A system of equations is a collection of two or more equations with
            a same set of unknown variable. When solving a system of equations
            the objective it to find values for each of the unknowns that will
            satisfy every equation in the system. A system of linear equations
            can be represented using matrices in the following way:
            <div className="example-sys-eq-holder">
              <img src={axb} alt="matrix" />
            </div>
            Where A is the coefficient matrix, X is the variable matrix, and a b
            is the constant matrix. Lets see and example. Supose you have the
            following system:
            <div className="example-sys-eq-holder">
              <img
                className="example-sys-eq"
                src={exampleSysEq}
                alt="example system"
              />
            </div>
            <div>
              This system could expressed using matrices in the following way:
            </div>
            <div className="example-sys-eq-holder">
              <img
                className="example-sys-eq"
                src={exampleSysEqMatrix}
                alt="example system in matrix form"
              />
            </div>
          </div>
          <br />
          <div className="requirements">
            <div className="section-title">Requirements</div>
            In order for num-calc to calulate the solution of the system of
            equations you need to provide the following information and satisfy
            the following conditions:
            <ul className="method-conditions">
              <br />
              <li>
                <span className="req-title"> Ab: </span> Is the concatenation of
                the coefficient matrix and the constant matrix. These matrices
                must have compatible sizes. The matrix Ab should be written as
                an array that contains arrays each one representing a row of the
                matrix. Taking into consideration the example presented above,
                the matriz Ab would be: [[2,3,5],[6,10,20]]
              </li>
            </ul>
          </div>
        </div>
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
    </div>
  );
}
export default SolveSystemsOfEquations;
