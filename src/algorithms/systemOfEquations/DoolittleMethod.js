const { matrix, identity, subtract } = require('mathjs');
function DoolittleMethod(Ab) {
  Ab = matrix(Ab);
  [numF, numC] = Ab._size;
  if (numF + 1 != numC) {
    return 'invalid maxtrix dimensions';
  } else {
    L = identity(numF);
    U = identity(numF);
    for (let k = 0; k < numF; k++) {
      suma1 = 0;
      for (let j = 0; j <= k - 1; j++) {
        suma1 = suma1 + L._data[k][j] * U._data[j][k];
      }
      U._data[k][k] = subtract(Ab._data[k][k], suma1);

      for (let i = k + 1; i < numF; i++) {
        suma2 = 0;
        for (let q = 0; q <= k - 1; q++) {
          suma2 = suma2 + L._data[i][q] * U._data[q][k];
        }
        L._data[i][k] = subtract(Ab._data[i][k], suma2) / U._data[k][k];
      }
      for (let j = k + 1; j < numF; j++) {
        suma3 = 0;
        for (let s = 0; s <= k - 1; s++) {
          suma3 = suma3 + L._data[k][s] * U._data[s][j];
        }
        U._data[k][j] = subtract(Ab._data[k][j], suma3);
      }
    }
    detL = 1;
    detU = 1;
    for (i = 0; i < numF; i++) {
      detU = detU * U._data[i][i];
    }
    detA = detU * detL;

    if (detA != 0) {
      let z = Array(numF).fill(0);
      z[0] = Ab._data[0][numC - 1] / L._data[0][0];
      for (let i = 0; i < numF; i++) {
        suma = 0;
        for (let j = 0; j <= i - 1; j++) {
          suma = suma + L._data[i][j] * z[j];
        }
        z[i] = subtract(Ab._data[i][numC - 1], suma) / L._data[0][0];
      }
      let x = [];
      for (let i = numF - 1; i >= 0; i--) {
        suma = 0;
        for (let j = i + 1; j < numF; j++) {
          suma = suma + U._data[i][j] * x[j];
        }
        x[i] = (z[i] - suma) / U._data[i][i];
      }
      return x;
    } else {
      return 'The problem has no solution or has infinite solutions';
    }
  }
}
console.log(
  DoolittleMethod([
    [1, 2, 5],
    [4, 5, 6],
  ])
);
//export default DoolittleMethod;
