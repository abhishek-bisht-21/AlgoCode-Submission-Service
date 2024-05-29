const fastify = require('fastify')({ logger: true }); // calling the fastify constructor

const PORT = 3000

fastify.get('/ping', (req, res) => {
	// controller function
	res.send({data: 'pong'});
});


fastify.listen({port: PORT}, (err) => {
	if(err){
		fastify.log.error(err);
		process.exit(1);
	}

	console.log(`Server up at port ${PORT}`);
});