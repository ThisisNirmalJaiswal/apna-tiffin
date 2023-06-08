const express = require('express');
const { updateUser } = require('../controllers/userController');
const router = express.Router();

router.post('/user/register', createUser);
router.get('/user/login', login);
router.put('/user/update', updateUser);
router.put('/user/delete', deleteUser);

module.exports = router;

