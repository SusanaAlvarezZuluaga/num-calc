import { evaluate } from 'mathjs';
import { useEffect, useRef } from 'react';
function UserInputs(props) {
  const {
    equation,
    setEquation,
    numIterations,
    setNumIterations,
    limInf,
    setLimInf,
    limSup,
    setLimSup,
    tolerance,
    setTolerance,
    handleSubmit,
  } = props;
  const inputFunction = useRef(null);

  function validateEquation() {
    try {
      const xi = parseFloat(limInf);
      const xs = parseFloat(limSup);
      const yi = evaluate(equation, { x: xi });
      const ys = evaluate(equation, { x: xs });
      if (yi * ys <= 0) {
        //setMessageEquation('');
        inputFunction.current.setCustomValidity('');
      } else {
        inputFunction.current.setCustomValidity(
          'Please enter a valid interval. Remember f(limInf)*f(limSup)<0'
        );
      }
    } catch {
      inputFunction.current.setCustomValidity(
        'Invalid function. Remember to write your function in terms of the variable x'
      );
    }
  }
  useEffect(() => {
    if (inputFunction) {
      validateEquation();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [equation, limInf, limSup]);
  return (
    <div>
      <div className="form-title">Problem Info</div>
      <form
        className="closed-methods-form"
        id="closed-methods-form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="form-body">
          <div className="labels">
            <div className="label">f(x):</div>
            <div className="label">Max iterations:</div>
            <div className="label">Inferior limit:</div>
            <div className="label">Superior limit:</div>
            <div className="label">Error:</div>
          </div>

          <div className="inputs">
            <div>
              <input
                ref={inputFunction}
                className="input"
                type="text"
                id="equation"
                required
                value={equation}
                onChange={(e) => {
                  setEquation(e.target.value);
                }}
              ></input>
            </div>

            {/* NUM ITERATIONS INPUT */}
            <div>
              <input
                className="input"
                type="number"
                step="1"
                min="0"
                required
                value={numIterations}
                onChange={(e) => {
                  setNumIterations(e.target.value);
                  if (
                    !Number.isInteger(parseFloat(e.target.value)) ||
                    parseFloat(e.target.value) <= 0
                  ) {
                    e.target.setCustomValidity('Must be a positive integer');
                  } else {
                    e.target.setCustomValidity('');
                  }
                }}
              ></input>
            </div>

            {/* Xinferior */}
            <div>
              <input
                className="input"
                type="number"
                required
                value={limInf}
                onChange={(e) => {
                  setLimInf(e.target.value);
                  if (parseFloat(e.target.value) >= parseFloat(limSup)) {
                    e.target.setCustomValidity(
                      'Must be smaller than superior limit'
                    );
                  } else {
                    e.target.setCustomValidity('');
                  }
                }}
              ></input>
            </div>

            {/* X superior */}
            <div>
              <input
                className="input"
                type="number"
                required
                value={limSup}
                onChange={(e) => {
                  setLimSup(e.target.value);
                  if (parseFloat(e.target.value) <= parseFloat(limInf)) {
                    e.target.setCustomValidity(
                      'Must be bigger than inferior limit'
                    );
                  } else {
                    e.target.setCustomValidity('');
                  }
                }}
              ></input>
            </div>

            {/* tolerance*/}
            <div>
              <input
                className="input"
                type="number"
                required
                value={tolerance}
                onChange={(e) => {
                  setTolerance(e.target.value);
                  if (parseFloat(e.target.value) <= 0) {
                    e.target.setCustomValidity('Must be a positive number');
                  } else {
                    e.target.setCustomValidity('');
                  }
                }}
              ></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default UserInputs;
