import { matrix } from 'mathjs';
import { useRef, useEffect } from 'react';
function UserInputs(props) {
  let { Ab, setAb, handleSubmit } = props;
  const inputAb = useRef(null);

  function validateInputs() {
    try {
      Ab = Ab.slice(2, Ab.length - 2);
      Ab = Ab.split('],[');
      Ab = Ab.map((element) => element.split(','));
      Ab = Ab.map((row) => row.map((element) => parseFloat(element)));
      Ab = matrix(Ab);
      const [numF, numC] = Ab._size;
      if (numF + 1 !== numC) {
        return 'Enter a matrix of correct dimensions';
      } else {
        for (let i = 0; i < numF; i++) {
          for (let j = 0; j < numC; j++) {
            if (Number.isNaN(Ab._data[i][j])) {
              return 'Enter only numbers inside the matrix';
            }
          }
        }
        return '';
      }
    } catch {
      return 'Enter a valid matrix';
    }
  }

  useEffect(() => {
    inputAb.current.setCustomValidity(validateInputs());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Ab]);
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
            <div className="label">Ab:</div>
          </div>

          <div className="inputs">
            {/*Ab*/}
            <div>
              <input
                ref={inputAb}
                className="input"
                type="text"
                required
                value={Ab}
                onChange={(e) => setAb(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default UserInputs;
