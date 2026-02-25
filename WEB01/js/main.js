/*

EXERCISE 01 

console.log("Hello, World!");
console.warn("This is a warning message.");

n = [1, 2, 3, 4, 5]
console.table(n)

*/


/*EXERCISE 02
//escopo pai
nome0 = "Samyr"
nome1 = 'Samyr'

//função
function nomeFunção() {
    //escopo de função
    x1 = 2
    x2 = 3
    if (true) {
        y1 = 3
    }
    console.log(x1)
    console.log(x2)
    console.log(y1)
}

nomeFunção()

console.log(nome0)
console.log(nome1)


*/

/* EXERCISE 03
x0 = 'Samyr'
x1 = 1
x2 = true
x3=[1,2,3,4,5]
x4= {nome: 'Samyr', idade: 22}
x5=1
var x5 //escopo de função, mas não é recomendado usar var, pois tem um comportamento diferente do let e const, podendo causar problemas de escopo e hoisting.
let x6 //escopo de bloco e função, recomendado para variáveis que podem ser reatribuídas, pois tem um comportamento mais previsível em relação ao escopo e hoisting.

let y =1 
{
    let y=3
}
console.log(y)

console.log(typeof (x0))
console.log(typeof (x1))
console.log(typeof (x2))
console.log(typeof (x3))
console.log(typeof (x4))
console.log(typeof (x5))

*/

/* EXERCISE 04
let x
console.warn(x) //undefined

x = 3
console.log(x) //null
*/

/* EXERCISE 05 
let y = [1,2,3,4,5]
console.log(typeof y) //object
*/

/* EXERCISE 06
let numero = 123 // tipo number 
let texto = "123" // tipo string

let soma = numero + texto //convertendo texto para número
console.log(typeof soma) //string
console.log(soma) //123123

*/
/* EXERCISE 07

function f1(){
    console.log("Função f1")
}

function f2(){
    setTimeout(() => {
        console.log("Função f2")
    }, 1000) //função de callback, que é executada após um determinado tempo ou evento.    
    
}

f2()
f1()

*/

 /* EXERCISE 08
let objeto = {nome : "Samyr", idade: 22}
let json = JSON.stringify(objeto) //convertendo objeto para JSON

let texto = objeto.toString() //convertendo objeto para string
console.log(objeto) //string
console.log(texto) //[object Object]
console.log(JSON.parse(objeto)) //convertendo string para objeto, mas como a string não é um JSON válido, retorna um erro.
    
*/

// let x = [1, 2, 3, 4, 5]
// console.log("Value of x position 0:", x[0]) // Output: 1
// console.log("Value of x position 1:", x[1]) // Output: 2
// console.log("Value of x position 2:", x[2]) // Output: 3
// console.log("Value of x position 3:", x[3]) // Output: 4
// console.log("Value of x position 4:", x[4]) // Output: 5

