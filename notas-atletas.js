/* 
    Autor: Arthur Augusto Tsutiya da Silva
    Data de criação: 11/09/2024

    Solução para o projeto de certificação 1 - Pontuação dos Atletas
*/

// Dados de entrada

let atletas = [
  {
    nome: 'Cesar Abascal',
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: 'Fernando Puntel',
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: 'Daiane Jelinsky',
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: 'Bruno Castro',
    notas: [10, 10, 10, 9, 9.5],
  },
];

// Função para calcular as médias

function calcularMedias(atletas) {

  const matrizNotas = atletas.map(atleta => atleta.notas.slice());
  const medias = [];

  for (let notas of matrizNotas) {
    notas.sort((a, b) => a - b);
    const notasFinais = notas.slice(1, notas.length - 1);
    const somaNotas = notasFinais.reduce((total, nota) => total + nota, 0);

    medias.push(somaNotas / notasFinais.length);
  }

  return medias;
}

let mediasFinais = calcularMedias(atletas);

// Mostrando ao usuário o resultados dos cálculos

for (let i = 0; i < atletas.length; i++) {
  console.log(`Atleta: ${atletas[i].nome}`);
  console.log(`Notas Obtidas: ${atletas[i].notas.slice().sort()}`);
  console.log(`Média Válida: ${mediasFinais[i]}`);
  console.log('');
}
