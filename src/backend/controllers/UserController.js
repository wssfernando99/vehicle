let User = require('../models/User');

exports.register = (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User([
        name,
        email,
        password
    ]);
    newUser.save().then(()=>{
        res.json("Uer details added successfully")
    }).catch((err)=>{
        console.log(err);
    })
}