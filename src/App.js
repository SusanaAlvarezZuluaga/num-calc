import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/';
import SolveEquation from './components/SolveEquations/';
import SolveSystemOfEquations from './components/SolveSystemOfEquations/';
import ClosedMethods from './components/SolveEquations/ClosedMethods';
import OpenMethods from './components/SolveEquations/OpenMethods';
import Interpolation from './components/interpolation';
import './index.css';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solve-equation" element={<SolveEquation />} />
      <Route
        path="/solve-system-of-equations"
        element={<SolveSystemOfEquations />}
      />
      <Route
        path="/solve-equation/closed-methods"
        element={<ClosedMethods />}
      />
      <Route path="/solve-equation/open-methods" element={<OpenMethods />} />
      <Route path="/interpolation" element={<Interpolation />} />
    </Routes>
  );
}

export default App;
