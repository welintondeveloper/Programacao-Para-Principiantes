console.log('exercicio 4');
/**
 * tarefa criar um algorítmo que permite determinar a classificaçao da nota do aluno em letra ex: A B C D F
 * 
 * se a nota está entre 100 e 90 = A
 * se a nota está entre 80  e 89 = B
 * se a nota está entre 70  e 79 = C
 * se a nota está entre 60  e 69 = D
 * se a nota for inferior a 60   = F
 * 
 */

let nota = -2;
let notaLetra = '';
if (nota > 100) {
  notaLetra = '';
  console.log('nota '+nota+' Nota inválida somente de 0 até 100');
} else if (nota < 0) {
  notaLetra = '';
  console.log('nota '+nota+' Nota inválida somente de 0 até 100');
} else if (nota >= 90) {
  notaLetra = 'A';
  console.log('nota ' + nota + ' \nParabéns!!! você recebeu um ' + "'" + notaLetra + "'");
} else if (nota >= 80) {
  notaLetra = 'B';
  console.log('nota ' + nota + ' \nMuito bém você recebeu um ' + "'" + notaLetra + "'");
} else if (nota >= 70) {
  notaLetra = 'C';
  console.log('nota ' + nota + ' \nNada mal você recebeu um ' + "'" + notaLetra + "'");
} else if (nota >= 60) {
  notaLetra = 'D';
  console.log('nota ' + nota + ' \nQue pena você recebeu um ' + "'" + notaLetra + "'");
} else {
  notaLetra = 'F';
  console.log('nota ' + nota + ' \nEstude mais!!! você recebeu um ' + "'" + notaLetra + "'");
}
