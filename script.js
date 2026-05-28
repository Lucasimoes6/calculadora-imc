const botao = document.getElementById('calcular')
const inputPeso = document.getElementById('peso')
const inputAltura = document.getElementById('altura')
const resultado = document.getElementById('resultado')
const valorImc = document.getElementById('valor-imc')
const classificacao = document.getElementById('classificacao')

botao.addEventListener('click', function() {
  const peso = parseFloat(inputPeso.value)
  const altura = parseFloat(inputAltura.value)
  const imc = peso / (altura * altura)
  const imcArredondado = imc.toFixed(2)
  let classificacaoTexto = ''

  if (imc < 18.5) {
    classificacaoTexto = 'Abaixo do peso'
  } else if (imc < 25) {
    classificacaoTexto = 'Peso normal'
  } else if (imc < 30) {
    classificacaoTexto = 'Sobrepeso'
  } else {
    classificacaoTexto = 'Obesidade'
  }

    valorImc.textContent = `Seu IMC é: ${imcArredondado}`
    classificacao.textContent = classificacaoTexto
    resultado.style.display = 'block'

})


