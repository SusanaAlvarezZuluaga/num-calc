import functionPlot from 'function-plot';
import { useEffect } from 'react';
import { useRef } from 'react';
function Graph(props) {
  let { equation, limInf, limSup, showSolutionNumClicks } = props;

  const rootEl = useRef(null);

  useEffect(() => {
    try {
      functionPlot({
        target: rootEl.current,
        xAxis: { label: 'x', domain: [limInf, limSup] },
        yAxis: { label: 'f(x)' },
        grid: true,
        data: [
          {
            fn: equation,
          },
        ],
      });
    } catch {}
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSolutionNumClicks]);

  return (
    <div>
      <div className="graph-title">Graph</div>
      <div ref={rootEl} className="graph-holder" style={{ width: '90%' }} />
    </div>
  );
}

export default Graph;
