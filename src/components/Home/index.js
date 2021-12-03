import { Link } from 'react-router-dom';

import solveEquations from '../../assets/solve-equations.jpg';
import systemsOfEquations from '../../assets/systems-of-equations.png';
import intergrals from '../../assets/integrals.jpg';
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
            <Link to="/solve-integral" style={{ textDecoration: 'none' }}>
              <img className="img-option" src={intergrals} />
              <div className="title-option">Solve integral</div>
            </Link>
          </div>

          <div className="option op4">
            <Link
              to="/solve-differential-equation"
              style={{ textDecoration: 'none' }}
            >
              <img className="img-option" src={differentialEquation} />
              <div className="title-option">Solve differential equation</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
