import { Link } from 'react-router-dom';
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
      <div className="intro">Choose what kinds of method you want to use</div>
      <div className="solve-equations-type-methods-holder">
        <Link
          to="/solve-equation/closed-methods"
          style={{ textDecoration: 'none' }}
        >
          <div className="solve-equations-type-method op3">
            <div> Closed methods</div>
            <p>
              Methods that in order to work, they require an interval, inside of
              which there is a root. This methods guarantee convergence. The
              available methods are:
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
              Methods that require a good inital value. This methods don't
              guarantee convergence however, when they converge they are much
              faster than closed methods.The available methods are:
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
