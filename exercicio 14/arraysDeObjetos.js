console.log('exercício 14 Arrays De Objetos');


let pessoa1 = {
  nome: 'josé',
  idade: 32
};
let pessoa2 = {
  nome: 'luiz',
  idade: 12
};
let pessoa3 = {
  nome: 'joão',
  idade: 28
};
let pessoas = [pessoa1,pessoa2,pessoa3]
for(i=0;i<pessoas.length;i++){//quando digo que i < do que pessoas ja atribuo o valor de pessoas na variavel i
  // let pessoa = pessoas[i];//outra maneira de fazer descobrir qual a posiçao de pessoas atualmente
  // se usar este metodo a linha de baixo ficaria assim console.log(`${pessoas.nome} -- ${pessoas.idade}`);
  console.log(`${pessoas[i].nome} -- ${pessoas[i].idade}`);//quero varrer pessoas.nome na posiçao i atual
}

