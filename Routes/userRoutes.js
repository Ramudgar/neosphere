const express = require('express');
const router = express.Router();
const User= require('../models/userModel');

// api to save user data
router.post('/users/savedata', (req, res) => {
    const data=req.body;
    if (!data) {
        res.status(400).json({ msg: 'Data not found' });
        return;
    }
    const user = new User({
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
        contactNumber: data.contactNumber,
        

    });

    user.save().then(( data) => {
        res.json({ msg: 'Data inserted', success: true ,data});
    }
    ).catch((error) => {
        res.status(500).json({ msg: error, success: false });
    }
    );
});


// api to get all user data


module.exports = router;