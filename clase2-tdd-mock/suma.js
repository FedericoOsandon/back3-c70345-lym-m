//TDD Desarrollo orientado a pruebas

// const suma = (numero1, numero2) => {
//     if(!numero1 || !numero2) return 0
//     if(typeof numero1 !== 'number' || typeof numero2 !== 'number') return null
//     const total = numero1 + numero2
//     return total
// }

// desarrollar el punto 4 
// const suma = (...numeros) => {
//     // if(!numero1 || !numero2) return 0
//     if(numeros.length === 0) return 0


//     // if(typeof numero1 !== 'number' || typeof numero2 !== 'number') return null
//     let validInput = true
//     for (let i = 0; i < numeros.length && validInput; i++) {
//        if(typeof numeros[i] !== 'number') validInput = false
    
//     }
//     if(!validInput) return null

//     // const total = numero1 + numero2
//     let result = 0
//     for (let i = 0; i < numeros.length; i++) {
//         result += numeros[i]        
//     }    
//     return result    
// }

// refactorizar  [1, 2, 3, 4, 5]
const suma = (...numeros) => {
    if(numeros.length === 0) return 0
    if(numeros.every(numero => typeof numero !== 'number')) return null
    return numeros.reduce((sumaTotal, numero) => sumaTotal+numero, 0)
}


let totalTest   = 4
let testPasados = 0

console.log('TEST ______________________________________________________________')
console.log(' ______________________________________________________________')
console.log('Test 1: la función debe devolver un null si algún parámetro es no numérico.')
const resultTest1 = suma(2,`2`)

if (resultTest1 === null) {
    console.log('test 1 pasó')
    testPasados ++
}else console.log(`Test 1 no pasó, se recivió ${typeof resultTest1}, pero se esperaba null`)

console.log(' ______________________________________________________________')
console.log('Test 2: la función debe devolver un 0 si pasa ningún parámetro.')
const resultTest2 = suma()

if (resultTest2 === 0) {
    console.log('test 2 pasó')
    testPasados ++
}else console.log(`Test 2 no pasó, se recivió ${resultTest2}, pero se esperaba 0`)

console.log(' ______________________________________________________________')
console.log('Test 3: la función debe devolver el resltado de la suma correctamente.')
const resultTest3 = suma(2,5)

if (resultTest3 === 7) {
    console.log('test 3 pasó')
    testPasados ++
}else console.log(`Test 3 no pasó, se recivió ${resultTest3}, pero se esperaba 7`)

console.log(' ______________________________________________________________')
console.log('Test 4: la función debe devolver el resltado de la suma correctamente cuando hay mas de dos numero.')
const resultTest4 = suma(1, 2, 3, 4, 5)

if (resultTest4 === 15) {
    console.log('test 4 pasó')
    testPasados ++
}else console.log(`Test 4 no pasó, se recivió ${resultTest1}, pero se esperaba 15`)

console.log(' ______________________________________________________________')
console.log(`SE paso ${testPasados} de ${totalTest} tests..`)
