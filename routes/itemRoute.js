const express = require('express');
const itemController = require('../controllers/itemController');

const router = express.Router();

router.route('/').get(itemController.getAllItems);
// router.route('/').get((req,res) => return req.statusCode(200));

module.exports = router;
