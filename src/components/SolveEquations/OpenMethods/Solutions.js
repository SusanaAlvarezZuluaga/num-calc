import { useEffect, useState } from 'react';
import NewtonMethod from '../../../algorithms/solveEquations/NewtonMethod';
import MultipleRootsMethod from '../../../algorithms/solveEquations/MultipleRootsMethod';
import Graph from '../../Graph';

function Solution(props) {
  const { showSolutionNumClicks, equation, x0, numIterations, tolerance } =
    props;
  const [NewtonMethodAnswer, setNewtonMethodAnswer] = useState('');
  const [MultipleRootsMethodAnswer, setMultipleRootsMethodAnswer] =
    useState('');
  useEffect(() => {
    setNewtonMethodAnswer(NewtonMethod(equation, x0, numIterations, tolerance));
    setMultipleRootsMethodAnswer(
      MultipleRootsMethod(equation, x0, numIterations, tolerance)
    );
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSolutionNumClicks]);

  return (
    <div className="solutions-section">
      <div className="solutions-title">Solutions</div>
      <div className="solutions-holder">
        <div className="method">
          <div className="method-name">Newton Method</div>
          <div className="method-answer">Answer: {NewtonMethodAnswer}</div>
        </div>
        <div className="method">
          <div className="method-name">Multiple Roots Method</div>
          <div className="method-answer">
            Answer: {MultipleRootsMethodAnswer}
          </div>
        </div>
      </div>
      <Graph
        equation={equation}
        limInf={parseFloat(x0) - 2}
        limSup={parseFloat(x0) + 2}
        showSolutionNumClicks={showSolutionNumClicks}
      />
    </div>
  );
}
export default Solution;
