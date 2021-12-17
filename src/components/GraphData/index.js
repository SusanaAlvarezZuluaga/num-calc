import React from 'react';
import { evaluate } from 'mathjs';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  registerables,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
ChartJS.register(...registerables);
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);
function GraphData(props) {
  const { x, y, LagrangePolynomial, NewtonPolynomial, showSolutionNumClicks } =
    props;
  const [data, setData] = useState();
  const xmin = Math.min(...x);
  const xmax = Math.max(...x);
  const options = {
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'black',
          boxWidth: 40,
          boxHeight: 0,
        },
      },
    },
  };
  function generateLabels() {
    let xLabels = [];
    for (let x = xmin; x <= xmax; x += 0.5) {
      xLabels.push(x);
    }
    return xLabels;
  }
  function generateInputData() {
    let data = [];
    for (let i = 0; i < x.length; i++) {
      data.push({ x: x[i], y: y[i] });
    }
    return data;
  }
  function setUpGraph() {
    const xValues = generateLabels();
    const inputData = generateInputData();
    setData({
      labels: xValues,
      datasets: [
        {
          type: 'line',
          label: 'Newton Polynomial',
          pointRadius: '0',
          borderColor: 'purple',
          borderWidth: 1,
          fill: true,
          data: xValues.map((xval) => {
            try {
              return evaluate(NewtonPolynomial, { x: xval });
            } catch {
              return '';
            }
          }),
        },
        {
          type: 'line',
          pointRadius: '0',
          label: 'Lagrange Polynomial',
          borderColor: 'pink',
          borderWidth: 3,
          fillStyle: 'white',
          fill: true,
          data: xValues.map((xval) => {
            try {
              return evaluate(LagrangePolynomial, { x: xval });
            } catch {
              return '';
            }
          }),
        },
        {
          type: 'scatter',
          label: 'Your data',
          borderWidth: 1,
          fill: false,
          borderColor: 'red',
          backgroundColor: 'red',
          data: inputData,
          pointRadius: '3',
        },
      ],
    });
  }

  useEffect(() => {
    setUpGraph();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSolutionNumClicks, NewtonPolynomial, LagrangePolynomial]);

  return (
    <div>
      {data &&
      LagrangePolynomial !== "Couldn't find solution" &&
      NewtonPolynomial !== "Couldn't find solution" ? (
        <div>
          <div className="graph-title">Graph</div>
          <Chart type="bar" data={data} options={options} />
        </div>
      ) : null}
    </div>
  );
}
export default GraphData;
