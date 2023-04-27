const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)
router.put('/:id', ensureLoggedIn, usersCtrl.update);
router.get("/:id", ensureLoggedIn, usersCtrl.user);

module.exports = router;
