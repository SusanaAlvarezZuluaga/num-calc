import { e } from 'mathjs/lib/cjs/entry/pureFunctionsAny.generated';
import { useRef, useEffect } from 'react';
function UserInputs(props) {
  let { x, setX, y, setY, handleSubmit, showSolutionNumClicks } = props;
  const inputX = useRef(null);
  const inputY = useRef(null);

  function validateInputs() {
    try {
      const xArr = x.split(',');
      const yArr = y.split(',');
      if (xArr.length === yArr.length) {
        inputY.current.setCustomValidity('');
        inputX.current.setCustomValidity('');
      } else {
        inputY.current.setCustomValidity(
          'make sure x and y have the same dimensions'
        );
        inputX.current.setCustomValidity(
          'make sure x and y have the same dimensions'
        );
      }
    } catch {
      inputX.current.setCustomValidity('invalid values for x');
      inputY.current.setCustomValidity('invalid values for y');
    }
  }

  useEffect(() => {
    validateInputs();
  }, [x, y]);
  return (
    <div>
      <div className="form-title">Problem Info</div>
      <form
        className="closed-methods-form"
        id="closed-methods-form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="form-body" style={{ height: '100px' }}>
          <div className="labels">
            <div className="label">X:</div>
            <div className="label">Y:</div>
          </div>

          <div className="inputs">
            {/* X*/}
            <div>
              <input
                ref={inputX}
                className="input"
                type="text"
                required
                value={x}
                onChange={(e) => setX(e.target.value)}
              ></input>
            </div>

            {/*Y*/}
            <div>
              <input
                ref={inputY}
                className="input"
                type="text"
                required
                value={y}
                onChange={(e) => setY(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default UserInputs;
