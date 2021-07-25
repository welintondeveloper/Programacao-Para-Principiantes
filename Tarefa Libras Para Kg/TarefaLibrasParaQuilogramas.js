console.log('Tarefa Converter Libras Para Quilogramas');

//para um resultado aproximado, divida o valor de massa (libras) pela constante 2,205

// converta 160 libras para Quilogramas;
const formula = 2.205;

function conversaoLbKg(libras){//funçao com argumento nescecita especificar este argumento na chamada da função

resultado = libras / formula;
//retornar o valor já convertido e arredondado para não ter tantas casas decimais 
//sem o Math.round 72.56235827664399 com  Math.round 73 Kg 
return 'o valor convertido de '+libras+ 'libras é '+ Math.round(resultado) +' Kg';


}

console.log(conversaoLbKg(160));//criando uma função fica mais fácil fazer vários calculos de uma vez 
console.log(conversaoLbKg(100));//basta repetir a chamada da função
console.log(conversaoLbKg(45));