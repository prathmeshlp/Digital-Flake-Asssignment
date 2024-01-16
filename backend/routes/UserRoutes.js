const express = require('express');
const router = express.Router();
const UserController = require("../controllers/UserController");


router.post('/register', UserController.RegisterUser);
router.post('/login', UserController.LoginUser);
// router.get('/getusers', UserController.getRegisteredUsers);





module.exports = router;