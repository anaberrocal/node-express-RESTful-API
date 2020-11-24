const express = require('express');
const router = express.Router();

router.get('/plants', (req, res, next) => {
    res.status(200).json({
        code: "noice",
        message: "I hope"
    })
})