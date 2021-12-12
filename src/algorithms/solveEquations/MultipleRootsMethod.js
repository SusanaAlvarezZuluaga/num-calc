import { evaluate, derivative } from 'mathjs';
function MultipleRootsMethod(fun, x0, n, tol) {
  x0 = parseFloat(x0);
  n = parseFloat(n);
  tol = parseFloat(tol);
  let y0 = evaluate(fun, { x: x0 });
  if (y0 === 0) {
    return `The root is ${x0}`;
  } else {
    let cont = 1;
    let fun_1 = derivative(fun, 'x').toString();
    let fun_2 = derivative(fun_1, 'x').toString();
    let gfun = `(${fun}* ${fun_1}) / (${fun_1} * ${fun_1} - ${fun} * ${fun_2})`;
    let err = tol + 1;
    let yn = y0;
    while (yn !== 0 && err > tol && cont < n) {
      let x0fun = evaluate(fun, { x: x0 });
      let x0fun_1 = evaluate(fun_1, { x: x0 });
      let x0fun_2 = evaluate(fun_2, { x: x0 });
      let xn = x0 - (x0fun * x0fun_1) / (x0fun_1 * x0fun_1 - x0fun * x0fun_2);
      yn = evaluate(fun, { x: xn });
      err = Math.abs((xn - x0) / xn);
      x0 = xn;
      cont = cont + 1;
    }
    if (yn == 0) {
      return `The root is ${x0}`;
    } else if (err < tol) {
      return `An approximation of the root is ${x0} with an error of ${err}`;
    } else if (cont >= n) {
      return `The method failed to converge in ${n} iterations. Try with a bigger number of iterations`;
    } else {
      return `The method failed to find a solution. Check that your inputs satisfy all the asked conditions`;
    }
  }
}
export default MultipleRootsMethod;
