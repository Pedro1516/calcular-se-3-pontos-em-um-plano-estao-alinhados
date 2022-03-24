const pontxA  = document.querySelector('#pontoxA')
const pontyA  = document.querySelector('#pontoyA')
const pontxB  = document.querySelector('#pontoxB')
const pontyB  = document.querySelector('#pontoyB')
const pontxC  = document.querySelector('#pontoxC')
const pontyC  = document.querySelector('#pontoyC')
const botao   = document.querySelector('#enviar')
const div     = document.querySelector('#resultado')

function alinhado(a, b, c){

const diagprincipal1 =   a[0] * b[1]
const diagprincipal2 =   a[1] * c[0]
const diagprincipal3 =   b[0] * c[1]

const part1 = diagprincipal1 + diagprincipal2 + diagprincipal3

const diagsecundaria1 = (b[1] * c[0]) * -1
const diagsecundaria2 = (a[0] * c[1]) * -1
const diagsecundaria3 = (a[1] * b[0]) * -1

const part2 = diagsecundaria1 + diagsecundaria2 + diagsecundaria3

return part2 + part1

}


function desenharMatriz(a, b, c, elemento){
	  elemento.innerText += `\n\n${a[0]} ${a[1]} 1 ${a[0]} ${a[1]}\n${b[0]} ${b[1]} 1 ${b[0]} ${b[1]}\n${c[0]} ${c[1]} 1 ${c[0]} ${c[1]}`
}

function positivouNegativo(a){
	if(a >= 0){
		return " + "
	}
	else{
   return ' '
 }
}



function desenharExpressao(a, b, c, elemento){

	const diagp1 =   a[0] * b[1]
	const diagp1sinal = positivouNegativo(diagp1)

	const diagp2 =   a[1] * c[0]
	const diagp2sinal = positivouNegativo(diagp2)

	const diagp3 =   b[0] * c[1]
	const diagp3sinal = positivouNegativo(diagp3)

  const diags1 = (b[1] * c[0]) * -1
  const diags1sinal = positivouNegativo(diags1)

  const diags2 = (a[0] * c[1]) * -1
  const diags2sinal = positivouNegativo(diags2)

  const diags3 = (a[1] * b[0]) * -1
  const diags3sinal = positivouNegativo(diags3)

  const resultado = alinhado(a, b, c)
	elemento.innerText += `\n\n${diags1}${diags2sinal}${diags2}${diags3sinal}${diags3}${diagp1sinal}${diagp1}${diagp2sinal}${diagp2}${diagp3sinal}${diagp3} = ${resultado}`

}






botao.addEventListener('click', () => {
	const pontA = [pontxA.value, pontyA.value]
	const pontB = [pontxB.value, pontyB.value]
	const pontC = [pontxC.value, pontyC.value]
	const alinhamento = alinhado(pontA, pontB, pontC)

	if(pontxA.value.length == 0 || pontyA.value.length == 0 || pontxB.value.length == 0 || pontyB.value.lenght == 0 || pontxC.value.length == 0 || pontyC.value.length == 0){
		window.alert('Não deixe nenhuma entrada em branco')
	}
	else{
	div.innerText = 'Resultado: '
	desenharMatriz(pontA, pontB, pontC, div)
	desenharExpressao(pontA, pontB, pontC, div)

	if(alinhamento == 0){
	 	div.innerText += '\n\nOs pontos estão alinhados'
	}
	else{
	 	div.innerText += '\n\nOs pontos não estão alinhados'
	}

	}
})
