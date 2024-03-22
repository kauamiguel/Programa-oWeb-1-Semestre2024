function verificarNumeroPrimo(n){

    if (n == 1 || n == 0){
        return false
    }

    for(let i = 2; i < n; i++){
        if (n % i == 0){
            return false
        }
    }
    return true
}

let verifica1 = verificarNumeroPrimo(0)
let verifica2 = verificarNumeroPrimo(1)
let verifica3 = verificarNumeroPrimo(2)
let verifica4 = verificarNumeroPrimo(3)
let verifica5 = verificarNumeroPrimo(100)
let verifica6 = verificarNumeroPrimo(991)
let verifica7 = verificarNumeroPrimo(14348907)
console.log(verifica3)
