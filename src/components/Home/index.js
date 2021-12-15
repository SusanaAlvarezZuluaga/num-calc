import { Link } from 'react-router-dom';

import solveEquations from '../../assets/solve-equations.jpg';
import systemsOfEquations from '../../assets/systems-of-equations.png';
import interpolation from '../../assets/interpolation.png';
import differentialEquation from '../../assets/differential-equations.jpg';
import Header from '../Header';
function Home() {
  return (
    <div className="home-page">
      <Header />
      <div className="home-page-body">
        <div className="title-math-options">What do you want to do today</div>
        <div className="options-holder">
          <div className="option op1">
            <Link to="/solve-equation" style={{ textDecoration: 'none' }}>
              <img className="img-option" src={solveEquations}></img>
              <div className="title-option"> Solve Equations</div>
            </Link>
          </div>

          <div className="option op2">
            <Link
              to="/solve-system-of-equations"
              style={{ textDecoration: 'none' }}
            >
              <img className="img-option" src={systemsOfEquations} />
              <div className="title-option">Solve system of equations</div>
            </Link>
          </div>

          <div className="option op3">
            <Link to="/interpolation" style={{ textDecoration: 'none' }}>
              <img className="img-option" src={interpolation} />
              <div className="title-option">Interpolation</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
