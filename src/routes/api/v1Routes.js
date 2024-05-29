async function v1Plugin(fastify, options) {
    fastify.register(require('../v1/test/testRoutes'), {prefix: '/test'});
}

module.exports = v1Plugin