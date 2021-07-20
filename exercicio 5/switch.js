console.log('exercício 5 switch');

let dia = 11;                    // variável que irei usar para fazer os testes
                               //  '_'
switch (dia) {                //dentro dos parenteses tenho o que irei testar
  case 0:                    //caso o teste de este número
    console.log('Domingo'); //executa este comando
    break;                 //o break fecha o ciclo depois de executar a condição 
  case 1:
    console.log('segunda');
    break;
  case 2:
    console.log('Terça');
    break;
  case 3:
    console.log('Quarta');
    break;
  case 4:
    console.log('Quinta');
    break;
  case 5:
    console.log('Sexta');
    break;
  case 6:
    console.log('Sábado');
  default://mensagem caso não tenha un numero entre o 0 e 6
    console.log('Dia da semana inválido');//não é nescesário colocar o break no case defalt
}