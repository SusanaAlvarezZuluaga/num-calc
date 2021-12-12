import { evaluate, derivative } from 'mathjs';
function NewtonMethod(fun, x0, n, tol) {
  x0 = parseFloat(x0);
  n = parseFloat(n);
  tol = parseFloat(tol);
  let y0 = evaluate(fun, { x: x0 });
  let dy0 = derivative(fun, 'x').evaluate({ x: x0 });
  let cont = 0;
  let error = tol + 1;
  while (error > tol && y0 !== 0 && dy0 !== 0 && cont < n) {
    let x1 = x0 - y0 / dy0;
    let y1 = evaluate(fun, { x: x1 });
    dy0 = derivative(fun, 'x').evaluate({ x: x1 });
    error = Math.abs(x1 - x0);
    x0 = x1;
    y0 = y1;
    cont = cont + 1;
  }
  if (y0 == 0) {
    return `The root is ${x0}`;
  } else if (error < tol) {
    return `An approximation of the root is ${x0} with an error of ${error}`;
  } else {
    return `The method failed to converge in ${n} iterations. Try with a bigger number of iterations`;
  }
}
export default NewtonMethod;
