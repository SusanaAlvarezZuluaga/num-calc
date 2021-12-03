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
                className="input"
                type="text"
                id="equation"
                required
                value={equation}
                onChange={(e) => setEquation(e.target.value)}
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
                onChange={(e) => setNumIterations(e.target.value)}
              ></input>
              <span className="validity"></span>
            </div>

            {/* Xinferior */}
            <div>
              <input
                className="input"
                type="number"
                required
                value={limInf}
                onChange={(e) => setLimInf(e.target.value)}
              ></input>
              <span className="validity"></span>
            </div>

            {/* X superior */}
            <div>
              <input
                className="input"
                type="number"
                required
                value={limSup}
                min={limInf}
                onChange={(e) => setLimSup(e.target.value)}
              ></input>
              <span className="validity"></span>
            </div>

            {/* tolerance*/}
            <div>
              <input
                className="input"
                type="number"
                required
                value={tolerance}
                onChange={(e) => setTolerance(e.target.value)}
              ></input>
              <span className="validity"></span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default UserInputs;
