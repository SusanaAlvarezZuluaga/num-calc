import {
  add,
  multiply,
  matrix,
  identity,
  subtract,
  sqrt,
  divide,
} from 'mathjs';
function CholeskyMethod(Ab) {
  try {
    Ab = matrix(Ab);
    const [numF, numC] = Ab._size;
    let A = Ab._data.map((row) => row.slice(0, numC - 1));
    A = matrix(A);
    let b = Ab._data.map((row) => [row[numC - 1]]);
    b = matrix(b);
    let L = identity(numF);
    let U = identity(numF);
    for (let k = 0; k < numF; k++) {
      let suma1 = 0;
      for (let p = 0; p <= k - 1; p++) {
        suma1 = add(suma1, multiply(L._data[k][p], U._data[p][k]));
      }
      L._data[k][k] = sqrt(subtract(A._data[k][k], suma1));
      U._data[k][k] = sqrt(subtract(A._data[k][k], suma1));
      for (let i = k + 1; i < numF; i++) {
        let suma2 = 0;
        for (let p = 0; p <= k - 1; p++) {
          suma2 = add(suma2, multiply(L._data[i][p], U._data[p][k]));
        }
        L._data[i][k] = divide(subtract(A._data[i][k], suma2), L._data[k][k]);
      }

      for (let j = k + 1; j < numF; j++) {
        let suma3 = 0;
        for (let p = 0; p < numF - 1; p++) {
          suma3 = add(suma3, multiply(L._data[k][p], U._data[p][j]));
        }
        U._data[k][j] = divide(subtract(A._data[k][j], suma3), L._data[k][k]);
      }
    }

    //regresive sustitution to find z
    let z = Array(numF).fill(0);
    z[0] = divide(Ab._data[0][numC - 1], L._data[0][0]);
    for (let i = 1; i < numF; i++) {
      let sumatoria = 0;
      for (let p = 0; p <= i - 1; p++) {
        sumatoria = add(sumatoria, multiply(L._data[i][p], z[p]));
      }
      z[i] = divide(subtract(b._data[i][0], sumatoria), L._data[i][i]);
    }
    //regresive sustitution to find x
    let x = Array(numF).fill(0);
    x[numF - 1] = divide(z[numF - 1], U._data[numF - 1][numF - 1]);
    if (x[numF - 1].im === 0) {
      x[numF - 1] = x[numF - 1].re;
    }
    for (let i = numF - 2; i >= 0; i--) {
      let sumatoria = 0;
      for (let p = i + 1; p < numF; p++) {
        sumatoria = add(sumatoria, multiply(U._data[i][p], x[p]));
      }
      x[i] = divide(subtract(z[i], sumatoria), U._data[i][i]);
      console.log(x[i].im);
      if (x[i].im === 0) {
        x[i] = x[i].re;
      }
    }
    if (x.includes('NaN')) {
      return "Couln't find solution";
    }
    x = x.map((element) => element.toFixed(3));
    return `x=[${x.toString()}]`;
  } catch {
    return "Couln't find solution";
  }
}
export default CholeskyMethod;
