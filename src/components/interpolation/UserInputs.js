import { useRef, useEffect } from 'react';
function UserInputs(props) {
  let { x, setX, y, setY, handleSubmit } = props;
  const inputX = useRef(null);
  const inputY = useRef(null);

  function validateInputs() {
    try {
      //parse x array
      let xArr = x.slice(1, x.length - 1);
      xArr = xArr.split(',');
      xArr = xArr.map((element) => parseFloat(element));
      //parse y array
      let yArr = y.slice(1, y.length - 1);
      yArr = yArr.split(',');
      yArr = yArr.map((element) => parseFloat(element));

      if (xArr.length === yArr.length) {
        //check for only numbers
        for (let i = 0; i < xArr.length; i++) {
          if (Number.isNaN(xArr[i])) {
            inputX.current.setCustomValidity(
              'Enter only numbers inside the array'
            );
          } else {
            inputX.current.setCustomValidity('');
          }
          if (Number.isNaN(yArr[i])) {
            inputY.current.setCustomValidity(
              'Enter only numbers inside the array'
            );
          } else {
            inputY.current.setCustomValidity('');
          }
        }
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
    //eslint-disable-next-line react-hooks/exhaustive-deps
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
