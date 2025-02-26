import { Router } from 'express'

import compression from 'express-compression'

const router = Router()

router.use(compression())
// router.use(compression({
//     brotli: { enabled: true, zlib: {} }
// }))
router.get('/stringlargo', (req, res) => {
    let string = 'Hola coders, soy un string ridiculamente muy largo -'
    for (let i = 0; i < 5e5; i++) {
        string += 'Hola coders, soy un string ridiculamente muy largo -'
    }
    res.send(string)
})



export default router
