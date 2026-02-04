export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })
  fastify.get('/api', async function (request, reply) {
    return { message: 'привет' };
  })
}
