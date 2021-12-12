import { e } from 'mathjs/lib/cjs/entry/pureFunctionsAny.generated';
import { useRef, useEffect } from 'react';
function UserInputs(props) {
  let { A, setA, B, setB, handleSubmit, showSolutionNumClicks } = props;
  const inputA = useRef(null);
  const inputB = useRef(null);

  function validateInputs() {
    try {
      const AArr = A.split(',');
      const BArr = B.split(',');
      if (AArr.length === BArr.length) {
        inputB.current.setCustomValidity('');
        inputA.current.setCustomValidity('');
      } else {
        inputB.current.setCustomValidity(
          'make sure x and y have the same dimensions'
        );
        inputA.current.setCustomValidity(
          'make sure x and y have the same dimensions'
        );
      }
    } catch {
      inputA.current.setCustomValidity('invalid values for x');
      inputB.current.setCustomValidity('invalid values for y');
    }
  }

  useEffect(() => {
    //validateInputs();
  }, [A, B]);
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
            <div className="label">A:</div>
            <div className="label">b:</div>
          </div>

          <div className="inputs">
            {/* X*/}
            <div>
              <input
                ref={inputA}
                className="input"
                type="text"
                required
                value={A}
                onChange={(e) => setA(e.target.value)}
              ></input>
            </div>

            {/*Y*/}
            <div>
              <input
                ref={inputB}
                className="input"
                type="text"
                required
                value={B}
                onChange={(e) => setB(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default UserInputs;
