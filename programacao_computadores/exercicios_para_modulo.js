//////////////////////
/*   exe1 */
function exe1(n){
    var soma = Number(0)
    for (var i = Number(0); i <= n; i++){
        soma = soma + 1
    }
    return soma
}

function principal (){
    var numero = Number(prompt(`Indique um número`))
    var restultado = exe1 (numero)
    console.log(`A soma dos números é ${restultado}`)
} 

principal()
/* exe2 */
function exe2 (){
    entrada2()
    calculo2() 
    console.log(`Em segundos seu valor fica ${resultado}`)
}

function entrada2 (){
    console.log(`Por favor entre com 3 números Inteiros`)
    var h = Number(prompt(`Insira o primeiro valor Inteiro`))
    var m = Number(prompt(`Insira o segundo número`))
    var s = Number(prompt(`Insira o terceiro valor`))
}

function calculo2 (){
    
}