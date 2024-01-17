const express = require('express')
const router= express.Router();
router.get('/', (req, res) => {
    const obj = {
        "name":"Rahul",
        "age":20
    }
    res.json(obj)
});
module.exports = router;