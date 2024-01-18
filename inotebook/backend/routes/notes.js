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

//Route3:Update an existing note:PUT "/api/auth/updatenote".Login required

router.post('/updatenote/:id',fetchuser, async (req, res) => {

    try{
    const {title,description,tag}=req.body;

    //Create a newNote object
    const newNote={};
    if(title){newNote.title=title};
    if(description){newNote.description=description};
    if(tag){newNote.tag=tag};

    //Find the note to be updated and update it
    let note=await Notes.findById(req.params.id);
    if(!note){return res.status(404).send("Not Found")};
    if(note.user.toString()!==req.user.id){return res.status(401).send("Not Allowed")};
    note=await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});
    res.json({note});
    }catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error");

    }
    
});
//Route4:Delete an existing note:DELETE "/api/auth/deletenote".Login required
// router.get('/api/auth/deletenote/:id',fetchuser, async (req, res) => {
//     try {
//         //Find the note to be deleted and delete it
//         let note = await Notes.findById(req.params.id);
//         if (!note) { return res.status(404).send("Not Found") };
//         //Allow deletion only if user owns this note
//         if (note.user.toString() !== req.user.id) { return res.status(401).send("Not Allowed") };
//         note = await Notes.findByIdAndDelete(req.params.id);
//         res.json({ "Success": "Note has been deleted", note: note });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Internal Server Error");

//     }
// });

module.exports = router;





    
    
    
