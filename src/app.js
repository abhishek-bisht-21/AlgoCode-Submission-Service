const fastifyplugin = require('fastify-plugin');

/**
 * 
 * @param {fastify object} fastify 
 * @param {*} options 
 */
async function app(fastify, options) {
	fastify.register(require('@fastify/cors'));

	// register test routes
	fastify.register(require('./routes/v1/test/testRoutes'), {prefix: '/test'})
}

module.exports = fastifyplugin(app);