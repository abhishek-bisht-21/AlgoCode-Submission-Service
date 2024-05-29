function pingRequest(req, res) {
	return res.send({ data: 'pong-pong' });
}


module.exports = pingRequest;