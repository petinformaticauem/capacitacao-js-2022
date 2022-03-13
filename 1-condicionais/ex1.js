let a, b, c;
a = 1;
b = -1;
c = -30;

// const delta = Math.pow(b, 2) - 4 * a * c;
const delta = b * b - 4 * a * c;

if (delta >= 0) {
  const x1 = ((Math.sqrt(delta) - b) / 2) * a;
  const x2 = (((Math.sqrt(delta) + b) * -1) / 2) * a;
  console.log(`x1: ${x1} x2: ${x2}`);
} else {
  console.log('Não existe raizes reais');
}
