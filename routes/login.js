const router = require('express').Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
	var login = path.join(__dirname, '..', 'public', 'login.html');
	
	res.sendFile(login);
});

router.post('/', function(req, res, next) {
	
	res.send({});
});

module.exports = router;