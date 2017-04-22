var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
	// Retrieve results her

	zip = req.body.zip;

	// Render results
	res.render('results', {zip: zip});
});

module.exports = router;
