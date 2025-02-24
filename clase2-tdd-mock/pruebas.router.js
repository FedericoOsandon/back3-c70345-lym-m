import { Router } from 'express'
import { fork } from 'node:child_process' // tiene fallas con --watch
import { faker } from '@faker-js/faker'

const router = Router()

const generateProducts = () => {
    return {
        id:          faker.database.mongodbObjectId(),
        title:       faker.commerce.productName(),
        price:       faker.commerce.price(),
        departament: faker.commerce.department(),
        stock:       parseInt(faker.string.numeric()),
        description: faker.commerce.productDescription(),
        thumbnail:   faker.image.url(),
    }
}


// users <- carrito con productos
const generateUser = () => {
    let numberOfProductsToCarts = parseInt(faker.string.numeric(1, {bannedDigits: ['0']}))
    let carts = []
    for (let i = 0; i < numberOfProductsToCarts; i++) {
        carts.push(generateProducts())
    }
    return {
        id:         faker.database.mongodbObjectId(),
        first_name: faker.person.firstName(),
        last_name:  faker.person.lastName(),
        birthDate:  faker.date.birthdate(),
        image:      faker.image.avatar(),
        email:      faker.internet.email(),
        phone:      faker.phone.number(),
        gender:     faker.person.sex(),
        carts,
    }
}



router.get('/usersmocks', (req, res) => {
    let users = []
    for (let i = 0; i < 50; i++) {
        users.push(generateUser())
    }

    res.send({status: 'success', payload: users})
})


































// function operacionCompleja() {
//     let result = 0
//     for (let i = 0; i < 8e9; i++) {
//         result += i        
//     }
//     return result
// }

// app.get('/', (req, res)=>{+
//     res.send('bienvenidos')
// })
// app.get('/sumacomp', (req, res)=>{ // una tarea pesada
//     const result = operacionCompleja()
//     res.send(`el resutado es: ${result}`)
// })
// app.get('/sumacomp', (req, res)=>{ // una tarea pesada
//     // const result = operacionCompleja()
//     const child = fork('./operacionCompleja.js')
//     child.send('inicia el cáculo')
//     child.on('message', result => {
//         res.send(`el resutado es: ${result}`)
//     })
// })


export default router
