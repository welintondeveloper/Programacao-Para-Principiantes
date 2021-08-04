console.log('Tarefa Descubrir Se O Numero E Impar Ou Par');

let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5];

for (i = 0; i < numeros.length; i++) {//quando colocamos a condiçao menor a números já adicionamos números no laço
  numero = numeros[i]//crie uma variável para armazenar o número na hora que o for percorrer o laço e captar ele
  inpa = ''//cria uma variavel com uma string vazia para depois modificarmos ela dentro do if
  if(numero % 2 === 0){//se o resto da divizao do número da posiçao atual que o for tiver percorrendo for === 0 par
    inpa = 'par' 
  }
  else {
    inpa = 'impar'//caso contrário se o resto da divizao por 2 for 1 o número é impar
  } 
  
  console.log(`a posição ${i} que é igual a ${numeros[i]} do array é ${inpa}`)//concatenação com ``
}

