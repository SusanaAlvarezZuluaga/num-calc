import { Link } from 'react-router-dom';
import Latex from 'react-latex';
function SolveEquation() {
  return (
    <div className="solve-equations-page">
      <div className="simple-header">
        <Link
          className="arrow-back-holder"
          to="/"
          style={{ textDecoration: 'none' }}
        >
          <span className="material-icons arrow-back">arrow_back</span>
        </Link>
        <div>Solve one variable equations</div>
      </div>

      <div className="explanation">
        In mathematics, to solve an equation is to find its solutions, which are
        the values that fulfill the condition stated by the equation. A solution
        is an assignment of values to the unknown variables that makes the
        equality in the equation true. These solutions are often called roots.
        Numcalc provied you with two types of numerical methods that you can use
        to solve an equation: open or closed. In both cases you will be asked to
        provide a function f(x) and num-calc will find the solution of the
        equation:
      </div>
      <div className="explanation">f(x)=0</div>
      <div className="explanation">For example if you input the function:</div>
      <div className="explanation">3x+5</div>
      <div className="explanation">
        Num calc will find the solution of the equation:
      </div>
      <div className="explanation">3x+5=0</div>
      <p></p>
      <br />
      <br />
      <div className="intro">Choose what kinds of method you want to use</div>

      <div className="solve-equations-type-methods-holder">
        <Link
          to="/solve-equation/closed-methods"
          style={{ textDecoration: 'none' }}
        >
          <div className="solve-equations-type-method op3">
            <div> Closed methods</div>
            <p>
              Are methods that in order to work, require the user to input an
              interval inside of which there is a root. This methods guarantee
              convergence. The available methods are:
            </p>
            <ul>
              <li> Bisection Method </li>
              <li> False Position Method </li>
            </ul>
          </div>
        </Link>
        <Link
          to="/solve-equation/open-methods"
          style={{ textDecoration: 'none' }}
        >
          <div className="solve-equations-type-method  op4">
            <div>Open methods</div>
            <p>
              Are methods that require a good inital value in order to work
              properly. This methods don't guarantee convergence however, when
              they converge they are much faster than closed methods.The
              available methods are:
            </p>
            <ul>
              <li>Newton's Method</li>
              <li>Multiple Roots Method</li>
            </ul>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default SolveEquation;
