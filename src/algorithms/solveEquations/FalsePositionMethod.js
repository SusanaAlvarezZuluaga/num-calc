import { evaluate } from 'mathjs';
function FalsePositionnMethod(fun, xi, xs, n, tol) {
  xi = parseFloat(xi);
  xs = parseFloat(xs);
  n = parseFloat(n);
  tol = parseFloat(tol);
  let yi = evaluate(fun, { x: xi });
  let ys = evaluate(fun, { x: xs });
  let cont = 0;
  if (yi === 0) {
    return `The root is ${xi}`;
  } else if (ys === 0) {
    return `The root is ${xs}`;
  } else if (yi * ys < 0) {
    let xm = xi - (yi * (xs - xi)) / (ys - yi);
    let ym = evaluate(fun, { x: xm });
    cont = 1;
    let E = tol + 1;
    while (E > tol && ym !== 0 && cont < n) {
      if (yi * ym < 0) {
        xs = xm;
        ys = ym;
      } else {
        xi = xm;
        yi = ym;
      }
      let xmanterior = xm;
      xm = (xi + xs) / 2;
      ym = evaluate(fun, { x: xm });
      E = Math.abs(xm - xmanterior);
      cont = cont + 1;
    }
    if (ym === 0) {
      return `The root is ${xm}`;
    } else if (E < tol) {
      return `An approximation of the root is ${xm} with an error of ${E}`;
    } else {
      return `The method failed to converge in ${n} iterations. Try with a bigger number of iterations`;
    }
  } else {
    return `Error!`;
  }
}
export default FalsePositionnMethod;
