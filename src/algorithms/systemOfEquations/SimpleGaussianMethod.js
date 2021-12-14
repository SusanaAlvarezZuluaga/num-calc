const { matrix, identity, subtract } = require('mathjs');
function SimpleGaussianMethod(Ab) {
  Ab = matrix(Ab);
  [numF, numC] = Ab._size;
  if (numF + 1 != numC) {
    return 'invalid maxtrix dimensions';
  } else {
    console.log('hola');
    L = identity(numF);
    U = Ab._data.map((row) => row.slice(0, numC - 1));
    for (let n = 1; n < numF; n++) {
      // Proceso para sacar L:
      //L(n + 1 : numF, n) = U(n + 1 : numF, n) / U(n, n);

      //Proceso para sacar U:
      for (l = n + 1; l < numF; l++) {
        //U(l, :) = U(l, :) - L(l, n) * U(n, :);
      }
    }
  }
}
SimpleGaussianMethod([
  [1, 2, 5],
  [4, 5, 6],
]);
