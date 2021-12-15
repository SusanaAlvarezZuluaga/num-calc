import { useRef, useEffect } from 'react';
function UserInputs(props) {
  let { Ab, setAb, handleSubmit } = props;
  const inputAb = useRef(null);

  function validateInputs() {}

  useEffect(() => {
    validateInputs();
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
