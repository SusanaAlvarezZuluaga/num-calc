const {
  add,
  multiply,
  matrix,
  identity,
  subtract,
  sqrt,
  divide,
  sum,
  re,
} = require('mathjs');
function CholeskyMethod(Ab) {
  Ab = matrix(Ab);
  [numF, numC] = Ab._size;
  let A = Ab._data.map((row) => row.slice(0, numC - 1));
  A = matrix(A);
  let b = Ab._data.map((row) => [row[numC - 1]]);
  b = matrix(b);
  L = identity(numF);
  U = identity(numF);
  for (let k = 0; k < numF; k++) {
    suma1 = 0;
    for (let p = 0; p <= k - 1; p++) {
      suma1 = suma1 + L._data[k][p] * U._data[p][k];
    }
    L._data[k][k] = sqrt(A._data[k][k] - suma1);
    U._data[k][k] = sqrt(A._data[k][k] - suma1);

    for (let i = k + 1; i < numF; i++) {
      suma2 = 0;
      for (let p = 0; p < k - 1; p++) {
        suma2 = suma2 + L._data[i][p] * U._data[p][k];
      }

      L._data[i][k] = (A._data[i][k] - suma2) / L._data[k][k];
    }

    for (let j = k + 1; j < numF; j++) {
      suma3 = 0;
      for (let p = 1; p < numF - 1; p++) {
        suma3 = suma3 + L._data[k][p] * U._data[p][j];
      }
      U._data[k][j] = (A._data[k][j] - suma3) / L._data[k][k];
    }
  }
  console.log(L._data);
  console.log(U._data);
  //regresive sustitution to find z
  let z = Array(numF).fill(0);
  z[0] = Ab._data[0][numC - 1] / L._data[0][0];
  for (let i = 1; i < numF; i++) {
    let sumatoria = 0;
    for (let p = 0; p <= i - 1; p++) {
      sumatoria = sumatoria + L._data[i][p] * z[p];
    }
    z[i] = divide(b._data[i][0] - sumatoria, L._data[i][i]);
  }
  console.log(z);

  //regresive sustitution to find x
  let x = Array(numF).fill(0);
  x[numF - 1] = divide(z[numF - 1], U._data[numF - 1][numF - 1]);
  if (x[numF - 1].im == 0) {
    x[numF - 1] = x[numF - 1].re;
  }
  for (let i = numF - 2; i >= 0; i--) {
    let sumatoria = 0;
    for (let p = i + 1; p < numF; p++) {
      sumatoria = add(sumatoria, multiply(U._data[i][p], x[p]));
    }
    x[i] = divide(subtract(z[i], sumatoria), U._data[i][i]);
    console.log(x[i].im);
    if (x[i].im == 0) {
      x[i] = x[i].re;
    }
  }
  return x;
}
//console.log(sqrt(-1));
console.log(
  CholeskyMethod([
    [1, 2, 5],
    [4, 5, 6],
  ])
);
