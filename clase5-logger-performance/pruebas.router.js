import { Router } from 'express'
import { fork } from 'node:child_process' // tiene fallas con --watch
import { faker } from '@faker-js/faker'
import compression from 'express-compression'

const router = Router()

router.use(compression())


router.get('/usertest', (req, res) => {
     res.send({
         first_name: faker.person.firstName(), 
         last_name:  faker.person.firstName(), 
         email:      faker.internet.email(), 
         password:   faker.internet.password() 
     })
})

// simala una tarea simple y liviana
router.get('/simple', (req, res) => {
   let suma = 0
   for (let i = 0; i < 1000000; i++) {
        suma += i    
   }
    res.send({ suma })
})

// simula una tarea compleja que utiliza mucho recursos
router.get('/compleja', (req, res) => {
   let suma = 0
   for (let i = 0; i < 8e8; i++) {
        suma += i    
   }
    res.send({ suma })
})
// count = cantidad de usuarios
// num   = numero de peticiones de los usuarios creados
// artillery quick --count 40 --num 50 'http://localhost:8080/pruebas/simple' -o simple.json
// artillery quick --count 40 --num 50 'http://localhost:8080/pruebas/compleja' -o compleja.json


// para prueba compleja 
// artillery run config.yaml --output testPerformance.json
// artillery report testPerformance.json -o testResult.html



// crear mock faker
// crear un config.yaml
// -> (registrar) usuarios 
// -> logear usuarios
// - duration: 20 // lapso de 20seg
//       arrivalRate: 10 // por segundo 





// router.get('/logger', (req, res) => {
//     req.logger.info('info')
//     req.logger.warning(`alerta ${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
//     req.logger.error('error')
//     res.send('logger ')
// })




// router.use(compression({
//     brotli: { enabled: true, zlib: {} }
// }))
// router.get('/stringlargo', (req, res) => {
//     let string = 'Hola coders, soy un string ridiculamente muy largo -'
//     for (let i = 0; i < 5e5; i++) {
//         string += 'Hola coders, soy un string ridiculamente muy largo -'
//     }
//     res.send(string)
// })

// const generateProducts = () => {
//     return {
//         id:          faker.database.mongodbObjectId(),
//         title:       faker.commerce.productName(),
//         price:       faker.commerce.price(),
//         departament: faker.commerce.department(),
//         stock:       parseInt(faker.string.numeric()),
//         description: faker.commerce.productDescription(),
//         thumbnail:   faker.image.url(),
//     }
// }


// // users <- carrito con productos
// const generateUser = () => {
//     let numberOfProductsToCarts = parseInt(faker.string.numeric(1, {bannedDigits: ['0']}))
//     let carts = []
//     for (let i = 0; i < numberOfProductsToCarts; i++) {
//         carts.push(generateProducts())
//     }
//     return {
//         id:         faker.database.mongodbObjectId(),
//         first_name: faker.person.firstName(),
//         last_name:  faker.person.lastName(),
//         birthDate:  faker.date.birthdate(),
//         image:      faker.image.avatar(),
//         email:      faker.internet.email(),
//         phone:      faker.phone.number(),
//         gender:     faker.person.sex(),
//         carts,
//     }
// }



// router.get('/usersmocks', (req, res) => {
//     let users = []
//     for (let i = 0; i < 50; i++) {
//         users.push(generateUser())
//     }

//     res.send({status: 'success', payload: users})
// })


































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
