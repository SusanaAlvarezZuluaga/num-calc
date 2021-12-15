import { useEffect, useState } from 'react';

import CholeskyMethod from '../../algorithms/systemOfEquations/CholeskyMethod';
import DoolittleMethod from '../../algorithms/systemOfEquations/DoolittleMethod';
function Solution(props) {
  let { showSolutionNumClicks, Ab } = props;
  const [CholeskyMethodAnswer, setCholeskyMethodAnswer] = useState('');
  const [DoolittleMethodAnswer, setDoolittleMethodAnswer] = useState('');
  function parseInput() {
    Ab = Ab.slice(2, Ab.length - 2);
    Ab = Ab.split('],[');
    Ab = Ab.map((element) => element.split(','));
    Ab = Ab.map((row) => row.map((element) => parseFloat(element)));
  }

  useEffect(() => {
    parseInput();
    setCholeskyMethodAnswer(CholeskyMethod(Ab));
    setDoolittleMethodAnswer(DoolittleMethod(Ab));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSolutionNumClicks]);

  return (
    <div className="solutions-section">
      <div className="solutions-title">Solutions</div>
      <div className="solutions-holder">
        <div className="method">
          <div className="method-name"> Cholesky Answer </div>
          <div className="method-answer">{CholeskyMethodAnswer}</div>
        </div>
        <div className="method">
          <div className="method-name">Dolittle Answer</div>
          <div className="method-answer">{DoolittleMethodAnswer}</div>
        </div>
      </div>
    </div>
  );
}
export default Solution;
