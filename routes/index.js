const router = require('express').Router();
const path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
	var home = path.resolve(path.join(__dirname, '..', 'public', 'home.html'));
	
	res.sendFile(home);
});

module.exports = router;
