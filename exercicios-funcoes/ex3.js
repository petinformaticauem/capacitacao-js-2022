function somaElementos(vetor) {
  let soma = 0;

  for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];
  }

  //substituindo o for acima pelo for of:

  // for (let elemento of vetor) {
  //   soma += elemento;
  // }

  return soma;
}

const resultado = somaElementos([1, 2, 3]);
console.log(resultado);
