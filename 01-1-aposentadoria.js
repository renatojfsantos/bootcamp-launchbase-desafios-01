// Cálculo de aposentadoria

// Crie um programa para calcular a aposentadoria de uma pessoa.

// Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros
//fatores para serem levados em conta :)

// Comece criando constantes para armazenar
//nome, sexo, idade e contribuicao(em anos),por exemplo:

const nome = "Silvana";
const sexo = "F";
const idade = 58;
const contribuicao = 33;

// Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa
//está apta ou não para se aposentar e no fim imprima uma mensagem em tela.

// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem
//precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;

const calculoContribuicao = idade + contribuicao

const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85
// Com base nas regras acima imprima na tela as mensagens:

// SE a pessoa estiver aposentada: Renato, você pode se aposentar!;
// SE a pessoa NÃO estiver aposentada: Renato, você ainda não pode se aposentar!

let message = ""

if (homemPodeAposentar || mulherPodeAposentar) {
  message = `${nome}, você pode se aposentar!`
} else {
  message = `${nome}, você ainda não pode se aposentar!`
}

console.log(message)