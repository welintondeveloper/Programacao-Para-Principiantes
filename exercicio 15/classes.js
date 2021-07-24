console.log('exercício 15 classes');


// let carro1 ={//objeto

//   marca: 'toyota',
//   tipo: 'sedan',
//   portas: 3,//mais se eu quisesse acrecentar uma outra propriedade em cada objeto ficaria trabalhoso
//   //por isso e melhor trabalhar com classes em ves de objetos 
//   foiCriado:'hoje'
// };

let carro2 ={//objeto

  marca:'ford',
  tipo: 'sedan',
  portas: 3

};
let carro3 ={//objeto

  marca:'mitsubishi',
  tipo:'sedan',
  portas: 4

};
// console.log(` marca ${carro1.marca}, ${carro1.portas} portas, tipo ${carro1.tipo}`);



//em uma classe podemos utilizar um construtor para facilitar a manutençao futura

class Carro{//classe

  constructor(marca, tipo, portas, foiCriado){//construtor
    this.marca = marca;//atributos da classe carro o this.marca significa que e o atributo da classe
    this.tipo = tipo;
    this.portas = portas;
    this.foiCriado = foiCriado;//o nome que eu colocar entre parenteses tenho que colocar o mesmo aqui
  }
  

}
carro1 = new Carro('toyota', 'sedan', 3, 'hoje');//estou criando direto aqui não preciso do objeto

console.log(carro1);//neste caso carro 1 é uma instancia da classe Carro e não um objeto como carro2 e carro3
console.log(carro2);//neste exemplo e no carro3 não tenho o atributo foiCriado no objeto facilita adicionar atributos
console.log(carro3);

//resumindo objetos são úteis, quando não precisará instancia-los em outra parte do programa Classes sao mais versáteis
//quando for trabalhar com coisas mais repetitivas ou coisas mais complexas opte por usar classes e não objetos