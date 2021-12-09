import Algebrite from 'algebrite';
function LagrangeMethod(X, Y) {
  //parse x array
  X = X.slice(1, X.length - 1);
  X = X.split(',');
  X = X.map((element) => parseFloat(element));

  //parse y array
  Y = Y.slice(1, Y.length - 1);
  Y = Y.split(',');
  Y = Y.map((element) => parseFloat(element));

  const n = X.length;
  let L = [];
  for (let j = 0; j <= n - 1; j++) {
    let superiorAnterior = 1;
    for (let i = 0; i <= j - 1; i++) {
      superiorAnterior = Algebrite.simplify(
        `(${superiorAnterior}) * (x-${X[i]})`
      ).toString();
    }

    let superiorPosterior = 1;
    for (let i = j + 1; i <= n - 1; i++) {
      superiorPosterior = Algebrite.simplify(
        `(${superiorPosterior}) * (x - ${X[i]})`
      ).toString();
    }

    let inferiorAnterior = 1;
    for (let i = 0; i <= j - 1; i++) {
      inferiorAnterior = Algebrite.simplify(
        `${inferiorAnterior} * (${X[j]} - ${X[i]})`
      ).toString();
    }

    let inferiorPosterior = 1;
    for (let i = j + 1; i <= n - 1; i++) {
      inferiorPosterior = Algebrite.simplify(
        `${inferiorPosterior} * (${X[j]} - ${X[i]})`
      ).toString();
    }
    L[j] = Algebrite.simplify(
      `((${superiorAnterior})*(${superiorPosterior}))/((${inferiorAnterior}) * (${inferiorPosterior}))`
    ).toString();
  }

  let pn = 0;
  for (let j = 0; j <= n - 1; j++) {
    pn = Algebrite.simplify(`(${pn})+((${L[j]})*${Y[j]})`).toString();
  }
  pn = Algebrite.simplify(pn).toString();
  console.log(pn);
  return pn;
}
export default LagrangeMethod;
