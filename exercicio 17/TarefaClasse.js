console.log('exercício 17 Tarefa classe');


class Carro {//classe

  constructor(marca, tipo, portas, foiCriado) {//construtor
    this.marca = marca;
    this.tipo = tipo;
    this.portas = portas;
    this.foiCriado = foiCriado;
    this.ligado = false;
    this.gasolina = 100;//tanque cheio quando inicia 100% de gasolina
  }

  ligarCarro() {
    if (this.ligado) {
      console.log('fundiu o motor o carro já estava ligado');
    } else {
      this.ligado = true;
      console.log('O Carro Está Ligado');
    }
    return this;//este método retorna todo o método 
  }
  realizarViajem(consumo) {//função dentro de uma classe e chamada de método mais nao deixa de ser uma função

    if (this.ligado && consumo < this.gasolina && consumo > 0) {
      this.gasolina = this.gasolina - consumo;
      return 'ainda resta ' + this.gasolina + '% de gasolina'
    }
    else if (this.ligado && consumo > this.gasolina) {
      return "não é possível realizar esta viagem porque não tem combustível suficiente "
    }
    else if (consumo <= 0 || this.ligado === false) {
      return 'gasto de combustível não especificado ou carro desligado não é possível viajar'
    } else {
      return 'função desconhecida';//este método retorna uma string nao é necesario colocar console.log
    }

    //neste momento a tarefa e modificar este método para que só seja possivel viajar se o carro estiver ligado
    //e também so e possivel viajar se o consumo de da viajem não for superior ao que resta de gasolina
  };

  //outra maneira de resolver este problema
  realizarViajem2(consumo) {

    if (!this.ligado) return console.log('carro desligado');
    if (consumo > this.gasolina) return console.log('nao pode is gasolina insuficiente');

    this.gasolina = this.gasolina - consumo;
    return 'Ainda resta ' + this.gasolina + '% de Combustível';

  }
}



carro = new Carro('toyota', 'sedan', 3, 'hoje');

// console.log(carro);