import { useEffect, useState } from 'react';
// import LagrangeMethod from '../../algorithms/interpolation/LagrangeMethod';
// import NewtonPolynomialMethod from '../../algorithms/interpolation/NewtonPolynomialMethod';
function Solution(props) {
  let { showSolutionNumClicks, A, B } = props;
  const [NewtonPolynomial, setNewtonPolynomial] = useState('');
  const [LagrangePolynomial, setLagrangePolynomial] = useState('');
  function parseInputs() {
    //parse A
    A = A.slice(2, A.length - 2);
    A = A.split('],[');
    A = A.map((element) => element.split(','));
    A = A.map((vector) => vector.map((element) => parseFloat(element)));
    //parse B
    B = B.slice(1, B.length - 1);
    B = B.split(',');
    B = B.map((element) => parseFloat(element));
  }

  useEffect(() => {
    parseInputs();
    //setNewtonPolynomial(NewtonPolynomialMethod(x, y));
    //setLagrangePolynomial(LagrangeMethod(x, y));
  }, [showSolutionNumClicks]);

  return (
    <div className="solutions-section">
      <div className="solutions-title">Solutions</div>
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
    </div>
  );
}
export default Solution;
