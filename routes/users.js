var express = require('express');
var router = express.Router();
var db = require('../models');
var UserService = require('../services/UserService');
var userService = new UserService(db);
var { canSeeUserList, canSeeUserDetails, checkIfAuthorized, isAdmin } = require('./authMiddlewares');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

/* GET users listing. */
router.get('/', canSeeUserList, async function (req, res, next) {
	const users = await userService.getAll();
	res.render('users', { users: users });
});

router.get('/:userId', canSeeUserDetails, checkIfAuthorized, isAdmin, async function (req, res, next) {
	const user = await userService.getOne(req.params.userId);

	if (user == null)
		res.render('error', { message: 'User not found', error: { stack: '', status: 404 } });
	
	if (user !== null)
		res.render('userDetails', { user: user });

});

router.delete('/', checkIfAuthorized, isAdmin, jsonParser, async function (req, res, next) {
	let id = req.body.id;
	await userService.deleteUser(id);
	res.end();
});

module.exports = router;
