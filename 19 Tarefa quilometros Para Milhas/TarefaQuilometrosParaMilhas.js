console.log('Tarefa quilômetros Para Milhas');

// Fórmula	para um resultado aproximado, divida o valor de comprimento por 1,609
// no nosso caso é uma tarefa em que uma milha equivale a 0.62 quilômetros

function formula (quilometros){
return `O Resultado da conversao de ${quilometros} quilômetros
é = ${resultado = (quilometros * 0.62)} Milhas `;//como milhas é uma constante podemos multiplicar dentro do return
}

console.log(formula(20));