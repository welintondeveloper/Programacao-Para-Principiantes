console.log('Tarefa Varrer Array E Imprimir O Maior Numero');
//quando nao temos os numeros array colocamos um numero super baixo se subesemos que o menor era 0
//poderiamos colocar na variável maio o valor de 0 porque e o número mais baixo do array
let maior= -999999;
let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];

for (i = 0; i <= numeros.length; i++) {
 
  if(numeros[i] >= maior ){
    maior = numeros[i];
  }

}

console.log('o maior número do array é '+ maior)

