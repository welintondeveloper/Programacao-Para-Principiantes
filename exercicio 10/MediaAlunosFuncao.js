console.log('exercício 10 Média Dos Alunos Funções');


function notaDoAluno (nota){
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
}

notaDoAluno(100);
notaDoAluno(80);
notaDoAluno(59);


