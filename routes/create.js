const router = require('express').Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
	var login = path.join(__dirname, '..', 'public', 'create.html');
	
	res.sendFile(login);
});

router.post('/', function(req, res, next) {
	//console.log(req.body)
	
	res.json({});
});

module.exports = router;