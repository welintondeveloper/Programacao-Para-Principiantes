console.log('exercício 16 Métodos De classe');


class Carro {//classe

  constructor(marca, tipo, portas, foiCriado) {//construtor
    this.marca = marca;
    this.tipo = tipo;
    this.portas = portas;
    this.foiCriado = foiCriado;
    this.ligado = false;
  }
  //aqui temos a situação seguinte veja que acima o carro está ligado quando chamo a função ligar carro vai ficar true
  // entao se eu chamar a função ligar carro novamente o motor do carro vai fundir
  /*
    ligarCarro(){
    if(this.ligado === true){//se o carro já estiver ligado o motor do carro vai fundir
      console.log('fundiu o motor o carro já estava ligado');
    }else{//carro o carro nao esteja ligado vai aparecer esta mensagem aqui
    this.ligado = true;//esta propriedade só será chamada caso o carro nao eteja ligado ainda
    console.log('O Carro Está Ligado');}
  }
  */
  ligarCarro() {//outra maneira mais comprimida de resolver o mesmo exercicio
    if (this.ligado) {//este é um valor boleano nao tem a nescecidade de colocar ===
      console.log('fundiu o motor o carro já estava ligado');
    } else {//caso o carro não esteja ligado vai aparecer esta mensagem aqui
      this.ligado = true;//esta propriedade só será chamada caso o carro nao eteja ligado ainda
      console.log('O Carro Está Ligado');
    }
    return this;//isto retorna a chamada da new função aabaixo quando eu escrevo no navegador carro.ligarCarro
  }


}
carro = new Carro('toyota', 'sedan', 3, 'hoje');//estou criando direto aqui não preciso do objeto

// console.log(carro);