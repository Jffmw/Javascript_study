console.log("o console funcionou corretamente") //console.log() == print()

var agora = new Date() //recebe os valores de data e hora do sistema
var hora = agora.getHours() //recebe o valor de hora do Date() existem outras funções para todo tipo de iformação de data e hora
console.log(`agora são ${hora} horas`)
if (hora < 12) {
  console.log('bom dia')
} else {
  console.log('ta atrasado')
}

//condições multiplas
var diaSem = agora.getDay()
switch (diaSem) { //igual no C 
  case 0:
    console.log('Domingo')
    break  //sem o break o switch continua fazendo os casos até ter um break
  case 1:
    console.log('Segunda')
    break
  case 2:
    console.log('Terça')
    break
  case 3:
    console.log('Quarta')
    break
  case 4:
    console.log('Quinta')
    break
  case 5:
    console.log('Sexta')
    break
  case 6:
    console.log('Sábado')
}
