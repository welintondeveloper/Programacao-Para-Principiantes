console.log('exercício 8 Funções');


function somar (a, b){//o compilador ignora por enquando esta linha
  return a + b;//passo 3 o compilador coloca os valores aqui na sequencia de 10 depois 20
}

let total = somar(10, 20);// 1 verificação, aqui ele começa a trabalhar volta pra linha 4

console.log(total);//passo quatro o compilador vai imprimir na tela o valor da função 
//somando os dois números caso não tenha nenhum número o compilador vai dizer Not A Number NaN