// console.log(process.pid) // propiedad pid -> process id
// console.log(process.memoryUsage())
// console.log(process.cwd())
// console.log(process.env)
// console.log(process.memoryUsage)

// tener argumentos
// console.log(process.argv)

// COMANDER dep para manejar argumentos





import { Command } from 'commander'

const program = new Command()

program
    .option('--mode <mode>', 'modo de trabajo del entorno', 'production')
    // .requiredOption('-u <user>', 'desciption', 'no se aha declarado ningún usuario')
    .parse()

export default program



/// listener de process
// .on sirve para escuchar eventos
// process.on('exit', code => {
//     console.log('evento que se ejecuta antes de salir o terminar el proceso ', code)
// }) 
// process.on('uncaughtException', exception => {
//     console.log('captura todos los errores no contralos: ', exception)
// }) 

// console.log('inicio')
// console('hola')

// existe fork  child process