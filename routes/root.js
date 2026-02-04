export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { message: 'server' }
  })
  fastify.get('/app', async function (request, reply) {
    return { message: 'привет' };
  })
}
