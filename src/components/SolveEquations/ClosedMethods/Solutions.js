import { useEffect, useState } from 'react';

import Graph from '../../Graph';
import BisectionMethod from '../../../algorithms/solveEquations/BisectionMethod';
import FalsePositionMethod from '../../../algorithms/solveEquations/FalsePositionMethod';

function Solution(props) {
  const {
    showSolutionNumClicks,
    equation,
    limInf,
    limSup,
    numIterations,
    tolerance,
  } = props;
  const [bisectionMethodAnswer, setBisectionMethodAnswer] = useState('');
  const [falsePositionMethodAnswer, setFalsePositionMethodAnswer] =
    useState('');
  useEffect(() => {
    setBisectionMethodAnswer(
      BisectionMethod(equation, limInf, limSup, numIterations, tolerance)
    );
    setFalsePositionMethodAnswer(
      FalsePositionMethod(equation, limInf, limSup, numIterations, tolerance)
    );
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSolutionNumClicks]);

  return (
    <div className="solutions-section">
      <div className="solutions-title">Solutions</div>
      <div className="solutions-holder">
        <div className="method">
          <div className="method-name">Bisection Method</div>
          <div className="method-answer">Answer: {bisectionMethodAnswer}</div>
        </div>
        <div className="method">
          <div className="method-name">False Position</div>
          <div className="method-answer">
            Answer: {falsePositionMethodAnswer}
          </div>
        </div>
      </div>
      <Graph
        equation={equation}
        limInf={limInf}
        limSup={limSup}
        showSolutionNumClicks={showSolutionNumClicks}
      />
    </div>
  );
}
export default Solution;
