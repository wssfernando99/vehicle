let User = require('../models/User');

exports.register = (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const user = new User({
        name,
        email,
        password
    });
    user.save().then(()=>{
        res.json("Uer details added successfully")
    }).catch((err)=>{
        console.log(err);
    })
}

exports.login = (req, res) => {
    User.findOne({email:req.body.email}).then((user)=>{
        if(!user){
            return res.status(404).json({success:false,message:"user email not found"});
        }else{
            user.comparePassword(req.body.password, (err,isMatch)=>{
                if(!isMatch){
                    return res.status(404).json({success:fail,message:"Your passowrd is wrong"})
                }else{
                    res.status(200).json({success:true,message:"Successfully Logged in!"})
                }
            })
        }
    }).catch((err)=>{
        console.log(err);
    })
};
