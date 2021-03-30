//Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

//Comece criando constantes para armazenar o
//nome, peso, altura e sexo de uma pessoa

const nome = "Carlos";
const peso = 84;
const altura = 1.88;

//A partir desses dados armazene em uma constante chamada imc
//o cálculo do índice de massa corporal definido pela fórmula abaixo:

const imc = peso / (altura * altura)

//SE o IMC maior ou igual a 30: Carlos você está acima do peso;
//SE o IMC menor que 29.9: Carlos você não está acima do peso;

let message = ""

if (imc >= 30) {
  message = `${nome} você está acima do peso`
} else {
  message = `${nome} você não está acima do peso`
}

console.log(message)