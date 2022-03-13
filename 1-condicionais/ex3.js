let num1, num2;
num1 = 3;
num2 = 24;

if (num1 % num2 == 0) {
  console.log(`${num1} é múltiplos de ${num2}`);
} else if (num2 % num1 == 0) {
  console.log(`${num2} é múltiplos de ${num1}`);
} else {
  console.log('Não são múltiplos');
}
