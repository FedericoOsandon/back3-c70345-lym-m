import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

import { objectConfig } from './config/index.js'
import pruebasRouter from './routes/pruebas.router.js'
import { handleErrors } from './middlewares/Errors/errors.middleware.js'

const app = express()
const PORT = objectConfig.port
const connection = mongoose.connect(`mongodb://localhost:27017/c70435`)

app.use(express.json())
app.use(cookieParser())


app.use('/pruebas', pruebasRouter)

app.use(handleErrors)

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))


// process -> objeto