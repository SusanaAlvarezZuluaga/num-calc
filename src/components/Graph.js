import functionPlot from 'function-plot';
import { useEffect } from 'react';
import { useRef } from 'react';
function Graph(props) {
  const { equation, limInf, limSup, showSolutionNumClicks } = props;
  const rootEl = useRef(null);
  let graph;
  useEffect(() => {
    try {
      graph = functionPlot({
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
    } catch {
      graph = null;
    }
  }, [showSolutionNumClicks]);

  return (
    <div>
      <div className="graph-title">Graph</div>
      <div ref={rootEl} className="graph-holder" style={{ width: '90%' }} />
    </div>
  );
}

export default Graph;
