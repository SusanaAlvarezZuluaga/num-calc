import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/';
import SolveEquation from './components/SolveEquations/';
import SolveSystemOfEquations from './components/SolveSystemOfEquations/';
import ClosedMethods from './components/SolveEquations/ClosedMethods';
import OpenMethods from './components/SolveEquations/OpenMethods';
import './styles/general.css';
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
    </Routes>
  );
}

export default App;
