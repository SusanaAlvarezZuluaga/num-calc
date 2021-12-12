import { Link } from 'react-router-dom';
function SolveSystemsOfEquations() {
  return (
    <div className="solve-equations-page">
      <div className="simple-header">Solve Systems of Equations</div>
      <div className="intro">Choose what kinds of method you want to use</div>
      <div className="solve-equations-type-methods-holder">
        <Link
          to="/solve-system-of-equations-factorization-methods"
          style={{ textDecoration: 'none' }}
        >
          <div className="solve-equations-type-method op3">
            <div> Factorization methods</div>
            <p>
              Methods that would be precise if it weren't for propagation
              errors. The available methods are:
              <ul>
                <li> Doolittle Method </li>
                <li> Simple Gaussian Method </li>
              </ul>
            </p>
          </div>
        </Link>
        <Link
          to="/solve-system-of-equations-iterative-methods"
          style={{ textDecoration: 'none' }}
        >
          <div className="solve-equations-type-method  op4">
            <div>Iterative methods</div>
            <p>
              Methods that in order to work, they require an initial values for
              all the variables.The available methods are:
              <ul>
                <li>Relaxed Jacobi Method</li>
                <li>Relaxed Gauss Seidel Method</li>
              </ul>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default SolveSystemsOfEquations;
