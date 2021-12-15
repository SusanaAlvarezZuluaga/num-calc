//import Algebrite from 'algebrite';
import { zeros, transpose, simplify } from 'mathjs';
function NewtonPolynomialMethod(X, Y) {
  try {
    const n = X.length;
    //construct matrix dif
    let dif = zeros(n, n);
    dif._data[0] = Y;
    dif = transpose(dif);
    //obtain difference table
    for (let j = 1; j <= n - 1; j++) {
      for (let i = 0; i <= n - j - 1; i++) {
        const division =
          (dif._data[i + 1][j - 1] - dif._data[i][j - 1]) / (X[i + j] - X[i]);
        dif._data[i][j] = division;
      }
    }
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
        Xt = `${Xt}*(x${sign2}${Xx[i]})`;
      }
      P = `${P}${sign}${dif._data[0][j]}${Xt}`;
    }
    P = simplify(P).toString();
    if (P.includes('NaN')) {
      return "Couldn't find solution";
    }
    return P;
  } catch {
    return "Couldn't find solution";
  }
}
export default NewtonPolynomialMethod;
