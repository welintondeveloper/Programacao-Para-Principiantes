console.log('exercício 9 Funções');


function imprimirTabuada(base) {

  //let serve para definir um espaço em memória nao devemos alocar nomanente a variável base

  let limite = 10;

  for (let i = 1; i <= limite; i++) {

    let resultado = base * i;
    console.log(base + ' X ' + i + ' = ' + resultado);

  }
}
imprimirTabuada(1);
console.log('------------------------------------\n')
imprimirTabuada(2);
console.log('------------------------------------\n')
imprimirTabuada(3);
console.log('------------------------------------\n')
imprimirTabuada(4);
console.log('------------------------------------\n')
imprimirTabuada(5);
console.log('------------------------------------\n')
imprimirTabuada(6);
console.log('------------------------------------\n')
imprimirTabuada(7);
console.log('------------------------------------\n')
imprimirTabuada(8);
console.log('------------------------------------\n')
imprimirTabuada(9);
console.log('------------------------------------\n')
imprimirTabuada(10);
console.log('------------------------------------\n')



