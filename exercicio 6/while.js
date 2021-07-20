console.log('exercício 6 while');
/**
 * exercício um veiculo com o tanque cheio 100 pode viajar ate certa distancia 
 * a cada quilometro rodado gasta 2% do tanque usaremos um laço while para isso
 */
let kilometros = 0;
let combustivel = 100;

while(combustivel >0){
  console.log('combustivél restante '+combustivel);
  kilometros++;//este ++ e como se eu disesse (kilometros é igual kilometros + 1)
  combustivel-=2;// -= e o mesmo que (combustivel é igual a combustível - 2)
}

console.log('kilometros percorridos = ' + kilometros + ' \nabasteça o veículo para continuar a viajar')
