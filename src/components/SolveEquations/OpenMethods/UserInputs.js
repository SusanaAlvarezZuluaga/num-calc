import { evaluate } from 'mathjs';
import { useEffect, useRef } from 'react';
function UserInputs(props) {
  const {
    equation,
    setEquation,
    numIterations,
    setNumIterations,
    x0,
    setX0,
    tolerance,
    setTolerance,
    handleSubmit,
  } = props;
  const inputFunction = useRef(null);

  function validateEquation() {
    try {
      const xi = parseFloat(x0);
      evaluate(equation, { x: xi });
      inputFunction.current.setCustomValidity('');
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
  }, [equation, x0]);
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
            <div className="label">x0:</div>
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

            {/* X0 */}
            <div>
              <input
                className="input"
                type="number"
                required
                value={x0}
                onChange={(e) => {
                  setX0(e.target.value);
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
