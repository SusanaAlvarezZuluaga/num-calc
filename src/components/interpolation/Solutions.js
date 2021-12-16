import { useEffect, useState } from 'react';
import GraphData from '../GraphData';
import LagrangeMethod from '../../algorithms/interpolation/LagrangeMethod';
import NewtonPolynomialMethod from '../../algorithms/interpolation/NewtonPolynomialMethod';
function Solution(props) {
  let { showSolutionNumClicks, x, y } = props;
  const [NewtonPolynomial, setNewtonPolynomial] = useState('');
  const [LagrangePolynomial, setLagrangePolynomial] = useState('');

  //parse x array
  x = x.slice(1, y.length - 1);
  x = x.split(',');
  x = x.map((element) => parseFloat(element));
  //parse y array
  y = y.slice(1, y.length - 1);
  y = y.split(',');
  y = y.map((element) => parseFloat(element));

  useEffect(() => {
    setNewtonPolynomial(NewtonPolynomialMethod(x, y));
    setLagrangePolynomial(LagrangeMethod(x, y));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSolutionNumClicks]);

  return (
    <div className="solutions-section">
      <div className="section-title">Solutions</div>
      <div className="solutions-holder">
        <div className="method">
          <div className="method-name"> Lagrange's Polynomial </div>
          <div className="method-answer">Answer: {LagrangePolynomial}</div>
        </div>
        <div className="method">
          <div className="method-name">Newton's Polynomial</div>
          <div className="method-answer">Answer: {NewtonPolynomial}</div>
        </div>
      </div>
      <GraphData
        equation="x"
        showSolutionNumClicks={showSolutionNumClicks}
        x={x}
        y={y}
        NewtonPolynomial={NewtonPolynomial}
        LagrangePolynomial={LagrangePolynomial}
      />
    </div>
  );
}
export default Solution;
