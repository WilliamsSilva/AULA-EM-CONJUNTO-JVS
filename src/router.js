const { request, response } = require('express');
const express = require ('express');

const router = express.Router();

router.get('/christian', (req, res) => {
    res.send("hello world");
})

module.exports = router;