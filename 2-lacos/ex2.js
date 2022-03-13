const nomes = ['Claudio', 'Maria', 'Jorge', 'Marcio', 'Ana', 'João'];
let busca = 'João';

for (i of nomes) {
  if (i == busca) {
    console.log('O nome está no vetor!');
    break;
  }
}
