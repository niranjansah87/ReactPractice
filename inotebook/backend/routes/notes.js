const express = require('express')
const router= express.Router();
const Notes = require('../models/Notes');
const fetchuser = require('../middleware/fetchuser');
const { check } = require('express-validator');
const { validationResult } = require('express-validator');


//Route1:Get ALL the notes:GET "/api/auth/getuser".Login required
router.get('/fetchallnotes',fetchuser, async (req, res) => {
    const notes = await Notes.find({user:req.user.id});
    res.json(notes)
});
//Route2:Add a new note:POST "/api/auth/addnote".Login required
router.post('/addnote',fetchuser,[
    check('title','Enter a valid title').isLength({min:3}),
    check('description','Description must be atleast 5 characters').isLength({min:5})
], async (req, res) => {
    try {
        //If there are errors,return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { title, description, tag } = req.body;
        const note = new Notes({
            title, description, tag, user: req.user.id
        });
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});




module.exports = router;





    
    
    
