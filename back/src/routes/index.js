const { Router } = require('express');
const userRouter = require('./userRouter');
const frontRouter = require('./frontRouter');

const router = Router();

//back
router.use('/usermanager', userRouter);
router.use('/manager', frontRouter);

module.exports = router;
