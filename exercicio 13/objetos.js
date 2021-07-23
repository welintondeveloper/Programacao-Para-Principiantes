console.log('exercício 13 Objetos');
//é recomendado sempre colocar as funções acima no topo convenção da comunidade
function descreverPessoa(individuo) {//definir função function, o nome da função, depois (argumentos opcioal){códigos}

  //backstick usado para formatar e interpolar variáveis colocando espaços e quebra de linhas mais facilmente
  //para acessar um atributo basta dizer argumento pode dar o nome que quizer para ele
  console.log(` ${individuo.nome}
 tem ${individuo.idade} anos
 e tem ${individuo.altura} de altura `);
};

pessoa = {//quando tem somente chaves significa que se trata de uma objeto
  nome: 'welinton', //para definir atributos de uma objeto usa : e como se fosse o =
  idade: 32,//também não se esqueça de separar os atributos com uma vírgula
  altura: 1.75

}

descreverPessoa(pessoa);//imprimir todos os atributos de pessoa dentro da minha função descrever pessoa
console.log(pessoa.nome, pessoa.idade, pessoa.altura)