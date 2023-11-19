const express = require('express');
const postUserController = require('../controllers/postUserController');


const router = express.Router();

router.post('/user', postUserController);


module.exports = router;