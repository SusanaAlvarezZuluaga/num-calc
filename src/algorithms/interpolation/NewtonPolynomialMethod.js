//import Algebrite from 'algebrite';
import { zeros, transpose } from 'mathjs';
import Algebrite from 'algebrite';
function NewtonPolynomialMethod(X, Y) {
  //parse x array
  X = X.slice(1, X.length - 1);
  X = X.split(',');
  X = X.map((element) => parseFloat(element));
  //parse y array
  Y = Y.slice(1, Y.length - 1);
  Y = Y.split(',');
  Y = Y.map((element) => parseFloat(element));

  const n = X.length;
  //construct matrix dif
  let dif = zeros(n, n);
  dif._data[0] = Y;
  dif = transpose(dif);
  //obtain difference table
  for (let j = 1; j <= n - 1; j++) {
    for (let i = 0; i <= n - j - 1; i++) {
      dif._data[i][j] =
        (dif._data[i + 1][j - 1] - dif._data[i][j - 1]) / (X[i + j] - X[i]);
    }
  }
  console.log(dif);
  //contruct polynomial
  const Xx = X.map((val) => -val);
  let P = dif._data[0][0];
  for (let j = 1; j <= n - 1; j++) {
    let sign = '';
    if (dif._data[0][j] >= 0) {
      sign = '+';
    }
    let Xt = '';
    for (let i = 0; i <= j - 1; i++) {
      let sign2 = '';
      if (Xx[i] >= 0) {
        sign2 = '+';
      }
      Xt = `${Xt}*(X${sign2}${Xx[i]})`;
    }
    P = `${P}${sign}${dif._data[0][j]}${Xt}`;
  }
  P = Algebrite.simplify(P).toString();
  return P;
}
export default NewtonPolynomialMethod;
