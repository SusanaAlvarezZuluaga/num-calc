import { matrix, identity, subtract } from 'mathjs';
function DoolittleMethod(Ab) {
  Ab = matrix(Ab);
  const [numF, numC] = Ab._size;
  if (numF + 1 != numC) {
    return 'invalid maxtrix dimensions';
  } else {
    let L = identity(numF);
    let U = identity(numF);
    for (let k = 0; k < numF; k++) {
      let suma1 = 0;
      for (let j = 0; j <= k - 1; j++) {
        suma1 = suma1 + L._data[k][j] * U._data[j][k];
      }
      U._data[k][k] = subtract(Ab._data[k][k], suma1);

      for (let i = k + 1; i < numF; i++) {
        let suma2 = 0;
        for (let q = 0; q <= k - 1; q++) {
          suma2 = suma2 + L._data[i][q] * U._data[q][k];
        }
        L._data[i][k] = subtract(Ab._data[i][k], suma2) / U._data[k][k];
      }
      for (let j = k + 1; j < numF; j++) {
        let suma3 = 0;
        for (let s = 0; s <= k - 1; s++) {
          suma3 = suma3 + L._data[k][s] * U._data[s][j];
        }
        U._data[k][j] = subtract(Ab._data[k][j], suma3);
      }
    }
    let detL = 1;
    let detU = 1;
    for (let i = 0; i < numF; i++) {
      detU = detU * U._data[i][i];
    }
    let detA = detU * detL;

    if (detA != 0) {
      let z = Array(numF).fill(0);
      z[0] = Ab._data[0][numC - 1] / L._data[0][0];
      for (let i = 0; i < numF; i++) {
        let suma = 0;
        for (let j = 0; j <= i - 1; j++) {
          suma = suma + L._data[i][j] * z[j];
        }
        z[i] = subtract(Ab._data[i][numC - 1], suma) / L._data[0][0];
      }
      let x = [];
      for (let i = numF - 1; i >= 0; i--) {
        let suma = 0;
        for (let j = i + 1; j < numF; j++) {
          suma = suma + U._data[i][j] * x[j];
        }
        x[i] = (z[i] - suma) / U._data[i][i];
      }
      return `x=[${x.toString()}]`;
    } else {
      return 'The problem has no solution or has infinite solutions';
    }
  }
}

export default DoolittleMethod;
