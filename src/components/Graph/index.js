import functionPlot from 'function-plot';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
function Graph(props) {
  const { equation, limInf, limSup, showSolutionNumClicks } = props;
  const rootEl = useRef(null);
  let graph;
  useEffect(() => {
    try {
      graph = functionPlot({
        target: rootEl.current,
        xAxis: { domain: [limInf, limSup] },
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
      <div>Graph</div>
      <div ref={rootEl} className="graph-holder" />
    </div>
  );
}

export default Graph;
