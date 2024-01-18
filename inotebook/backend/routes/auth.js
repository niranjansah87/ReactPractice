const express = require('express')
const router = express.Router();
const User = require('../models/Users');
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
//Create a User using: POST "/auth/"
// router.post('/', [
//     body('name', 'Enter a valid name').isLength({ min: 5 }),
//     body('email', 'Enter a valid email').isEmail(),
//     body('password', 'Password must be more than 8 character').isLength({ min: 8 })
// ], async (req, res) => {
//     try {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() })
//         }
//         let user;
//         user = await User.findOne({ email: req.body.email });
//         if (user) {
//             return res.status(400).json({ error: "Sorry a user with this email already exists" })
//         }

//         //hash creation
//         const salt=bcrypt.genSalt(10);
//         const secPass =  await bcrypt.hash(req.body.password,salt);

//         //user creation
//         user = await User.create({ name: req.body.name, email: req.body.email, password: secPass});
//         res.json(User);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Some Error Occured");
//     }
// });
// module.exports = router;




router.post('/', [
    body('name', 'Enter a valid name').isLength({ min: 5 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be more than 8 characters').isLength({ min: 8 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry, a user with this email already exists" })
        }

        // hash creation
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        // user creation
        user = await User.create({ name: req.body.name, email: req.body.email, password: secPass });
        res.json(user);  // <-- Fixed: response should be the created user, not the User model
    } catch (err) {
        console.error(err);
        res.status(500).send("Some Error Occurred");
    }
});

module.exports = router;