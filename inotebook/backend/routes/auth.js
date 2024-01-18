// const express = require('express')
// const router = express.Router();
// const User = require('../models/Users');
// const { body, validationResult } = require('express-validator')
// const bcrypt = require('bcryptjs');
// var jwt = require('jsonwebtoken');
// const { Error } = require('mongoose');
// const JWT_SECRET = 'Niranjanisagoodb$oy';
// //Create a User using: POST "/auth/"
// // router.post('/', [
// //     body('name', 'Enter a valid name').isLength({ min: 5 }),
// //     body('email', 'Enter a valid email').isEmail(),
// //     body('password', 'Password must be more than 8 character').isLength({ min: 8 })
// // ], async (req, res) => {
// //     try {
// //         const errors = validationResult(req);
// //         if (!errors.isEmpty()) {
// //             return res.status(400).json({ errors: errors.array() })
// //         }
// //         let user;
// //         user = await User.findOne({ email: req.body.email });
// //         if (user) {
// //             return res.status(400).json({ error: "Sorry a user with this email already exists" })
// //         }

// //         //hash creation
// //         const salt=bcrypt.genSalt(10);
// //         const secPass =  await bcrypt.hash(req.body.password,salt);

// //         //user creation
// //         user = await User.create({ name: req.body.name, email: req.body.email, password: secPass});
// //         res.json(User);
// //     } catch (err) {
// //         console.error(err);
// //         res.status(500).send("Some Error Occured");
// //     }
// // });
// // module.exports = router;




// router.post('/createuser', [
//     body('name', 'Enter a valid name').isLength({ min: 5 }),
//     body('email', 'Enter a valid email').isEmail(),
//     body('password', 'Password must be more than 8 characters').isLength({ min: 8 })
// ], async (req, res) => {
//     try {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() })
//         }

//         let user = await User.findOne({ email: req.body.email });
//         if (user) {
//             return res.status(400).json({ error: "Sorry, a user with this email already exists" })
//         }

//         // hash creation
//         const salt = await bcrypt.genSalt(10);
//         const secPass = await bcrypt.hash(req.body.password, salt);

//         // user creation
//         user = await User.create({ name: req.body.name, email: req.body.email, password: secPass });
//         const data = {
//             user: {
//               id: user.id
//             }
//           }
//           const authtoken = jwt.sign(data, JWT_SECRET);
      
      
//           // res.json(user)
//           res.json({ authtoken })
//         // res.json(user);  // <-- Fixed: response should be the created user, not the User model
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Some Error Occurred");
//     }
// });


// //Authenticate a User using: POST "/auth/login"
// router.post('/login', [
//     body('email', 'Enter a valid email').isEmail(),
//     body('password', 'Password must be more than 8 characters').isLength({ min: 8 })
// ], async (req, res) => {

//     //If there are errors,return bad request and the errors
//     const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() })
//         }
//         const {email,password}=req.body;
//         try{
//             let user=User.findOne(email);
//             if (!user) {
//                 return res.status(400).json({ error: "Please try to login with correct credentials" });
//             }
//             const passwordCompare = await bcrypt.compare(password, user.password);
//             if (!passwordCompare) {
//                 return res.status(400).json({ error: "Please try to login with correct credentials" });
//             }
//             const payload = {
//                 user: {
//                     id: user.id
//                 }
//             }
//             const authtoken = jwt.sign(payload, JWT_SECRET);
//             res.json({ authtoken });
            
//         }
//             catch(error){
//                 console.error(Error);
//                 console.error(error)
//                 res.status(500).send("Internal Server Error");

//             }


        

// });
// module.exports = router;






const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Error } = require('mongoose');
const JWT_SECRET = 'Niranjanisagoodb$oy';

router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 5 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be more than 8 characters').isLength({ min: 8 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry, a user with this email already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        user = await User.create({ name: req.body.name, email: req.body.email, password: secPass });
        const data = {
            user: {
              id: user.id
            }
          };
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({ authtoken });
    } catch (err) {
        console.error(err);
        res.status(500).send("Some Error Occurred");
    }
});

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be more than 8 characters').isLength({ min: 8 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        const authtoken = jwt.sign(payload, JWT_SECRET);
        res.json({ authtoken });

    } catch (error) {
        console.error(error);
        console.error(Error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
