
//tem um pequeno problema os nomes ficam juntos sem nenhuma separação
let nome = 'welinton';
let sobrenome = 'gomes';

let nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);


/* maneira incorreta de corrigir este problema seria adicionar um espaço no nome ou no sobrenome
*  ao adicionar um espaço sempre terá um espaço no nome, imaginem isto em um bando de dados (welinton )
*/ 
nome = 'welinton ';
sobrenome = 'gomes';

nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);


//a maneira certa seria inserir um espaço em brando entre o nome e sobrenome sem modificar o nome da variável
nome = 'welinton';
sobrenome = 'gomes';

nomeCompleto = nome +" "+ sobrenome//java script e bem flexivel pode usar " " ou ' ' para strings e nao precisa ;
console.log(nomeCompleto);


/**
 * o resultado vai ser 1020 por que nao vai somar os dois números e sim concatenar as duas strings
 */
let a = "10";
let b = '20';
console.log(c = a + b)


/**
 * este exemplo é a maneira correta de somar dois números importante quando voce declara uma variável 
 * com let não pode usar a palavra let novamente isso causa um erro que dis que o tipo da variável já foi declarada
 * em java script é feito uma inferencia de valor pelo tipo do dado que damos a variável
 * então se colocarmos string vai concatenar ou seja juntar as duas strings e se colocarmos números irá somar
 */
a = 10;
b = 20;
console.log(a + b)


/**
* os nomes das variáveis devem ter sentido, em booleam por exemplo devemos usar nomes positivos
* em JS este calculo é possivel mais o resultado será 1+0 = 1 true é 1 e false é 0
*/
let ativo = true;
let despedido = false;
console.log(ativo + despedido);


//neste caso o JS vai somar as duas variáveis porque vai inferir que são strings resultado é truefalse
ativo = 'true';
despedido = false;
console.log(ativo + despedido);


// pode dizer que este é um jeito normal de usar variáveis do tipo boolean
ativo = true;
despedido = false;
console.log('ativo? = '+ativo);
console.log('despedido? = '+despedido);
