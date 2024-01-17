const express = require('express')
const router= express.Router();
const User=require('../models/Users');
const {body,validationResult}=require('express-validator')

//Create a User using: POST "/auth/"
router.get('/',[
    body('name','Enter a valid name').isLength({min:5}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be more than 8 character').isLength({min:8})
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        await User.create({name:req.body.name, email:req.body.email, password:req.body.password});
        res.json(User);
    } catch (err) {
        console.log(err);
        res.json({error:'Please enter a unique value '});
    }
});
module.exports = router;