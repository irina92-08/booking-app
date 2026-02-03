import fastify from "fastify";
import cors from '@fastify/cors'

const app = fastify()
const port = 3000

app.get('/', (req, res) => {
    res.send('Booking App server')
})

app.listen({port}, () => {
    console.log(`Example app listening on port ${port}`)
})