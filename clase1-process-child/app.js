import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import { objectConfig } from './config/index.js'
import { fork } from 'node:child_process' // tiene fallas con --watch 

const app = express();
const PORT = objectConfig.port
const connection = mongoose.connect(`mongodb://localhost:27017/c70435`)

app.use(express.json())
app.use(cookieParser())

function operacionCompleja() {
    let result = 0
    for (let i = 0; i < 8e9; i++) {
        result += i        
    }
    return result
}

app.get('/', (req, res)=>{+
    res.send('bienvenidos')
})
// app.get('/sumacomp', (req, res)=>{ // una tarea pesada
//     const result = operacionCompleja()
//     res.send(`el resutado es: ${result}`)
// })
app.get('/sumacomp', (req, res)=>{ // una tarea pesada
    // const result = operacionCompleja()
    const child = fork('./operacionCompleja.js')
    child.send('inicia el cáculo')
    child.on('message', result => {
        res.send(`el resutado es: ${result}`)
    })
})



// app.use('/api/users',usersRouter);
// app.use('/api/pets',petsRouter);
// app.use('/api/adoptions',adoptionsRouter);
// app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))


// process -> objeto