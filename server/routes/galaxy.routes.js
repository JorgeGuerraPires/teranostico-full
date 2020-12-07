var express = require('express');
var router = express.Router();
const galaxyCtrl = require("../controllers/galaxy.controllers");

/* GET home page. */
router.get('/geneArray/:id', galaxyCtrl.getgeneArray);

module.exports = router;
