const { matrix, identity } = require('mathjs');
function Doolittle(A) {
  A = matrix(A);
  [numF, numC] = A._size;
  if (numF + 1 != numCol) {
    return 'invalid maxtrix dimensions';
  } else {
    L = identity(numF);
    U = identity(numF);
    for (let k = 0; k < numF; k++) {
      suma1 = 0;
      for (let j = 0; j <= k - 1; j++) {
        suma1 = suma1 + L[k][j] * U[j][k];
      }
      U[(k, k)] = A[(k, k)] - suma1;
      for (let i = k + 1; i <= numF - 1; i++) {
        suma2 = 0;
        for (let q = 0; q <= k - 1; q++) {
          suma2 = suma2 + L[i][q] * U[q][k];
        }
        L[(i, k)] = (A[i][k] - suma2) / U[k][k];
      }
      for (let j = k + 1; j < numF; j++) {
        suma3 = 0;
        for (let s = 0; s <= k - 1; s++) {
          suma3 = suma3 + L[k][s] * U[s][j];
        }
        U[k][j] = A[k][j] - suma3;
      }
    }
    detL = 1;
    detU = 1;
    for (i = 0; i < numF; i++) {
      detU = detU * U[i][i];
    }
    detA = detU * detL;
    if (detA != 0) {
      for (let i = 0; i < numF; i++) {
        suma = 0;
        for (let j = 0; j <= i - 1; j++) {
          suma = suma + L[i][j] * z[j];
        }
        z[i] = (A[i], [numCol] - suma) / L[i][i];
      }

      for (let i = numF; i >= 0; i--) {
        suma = 0;
        for (let j = i + 1; j < numF; j++) {
          suma = suma + U[i][j] * x[j];
        }
        x[i] = (z[i] - suma) / U[i][i];
      }
      return x;
    } else {
      return 'El problema tiene infinitas soluciones o no tiene solucion';
    }
  }
}

console.log(
  Doolittle(
    [
      [1, 2],
      [4, 5],
    ],
    [[1], [2]]
  )
);
