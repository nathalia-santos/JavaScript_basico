//variavel que defini a temperatura Kelvin
let kelvin = 283
kelvin = 310
//variavel que calcula conversão de kelvin para Celcius
let celsius = kelvin - 273
//variavel que calcula conversão de Celsius para Fahrenheit
let fahrenheit = (celsius * 1.8) + 32
//atribuindo a váriavel agora o método floor para que o valor seja arrendondado para menor número inteiro
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} Fahrenheit`)
//variável para calcular conversão de celsius em newton
let newton = celsius * (33/100)
newton = Math.floor(newton)
console.log(`The temperature is ${newton} Newton`)
