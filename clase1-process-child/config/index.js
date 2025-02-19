import dotenv from 'dotenv'
import program from '../../process.js'

const {mode} = program.opts()
// console.log(mode)

dotenv.config({
    path: mode === 'production'  ? './.env.production'  : './.env.development',
})

export const objectConfig = {
    port: process.env.PORT || 3000
}