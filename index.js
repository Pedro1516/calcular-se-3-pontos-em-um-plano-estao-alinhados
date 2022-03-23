const pontA  = [0, 1]
const pontB  = [1, 2]
const pontC  = [0, 1]


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
	

function desenharMatriz(a, b, c){
	  console.log(a[0], a[1], 1, a[0], a[1])
	  console.log(b[0], b[1], 1, b[0], b[1])
	  console.log(c[0], c[1], 1, c[0], c[1])
}

function positivouNegativo(a){
	if(a >= 0){
		return " + "
	}
	else{
   return ' '
 }
}



function desenharExpressao(a, b, c){
	
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
 console.log(`\n${diags1}${diags2sinal}${diags2}${diags3sinal}${diags3}${diagp1sinal}${diagp1}${diagp2sinal}${diagp2}${diagp3sinal}${diagp3} = ${resultado}`)

}


desenharMatriz(pontA, pontB, pontC)
desenharExpressao(pontA, pontB, pontC)

const alinhamento = alinhado(pontA, pontB, pontC)

if(alinhamento == 0){
  console.log('\nOs pontos estão alinhados')
}
else{
 console.log('\nOs pontos não estão alinhados')
}

