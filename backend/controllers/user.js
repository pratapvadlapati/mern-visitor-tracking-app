const User = require('../models/user');


exports.Signup = (req, res) => {

         const {username } = req.body; 

    //fetch user and test password verification
    User.findOne({ username }, function(error, existingUser) {
       
        if(error) {
            res.status(400).json({
                error: 'Unable to register User'
            })
        } 

        if(existingUser) {
            return res.status(409).json({
                message: "User already exists, pls login!"
            })
        } else {
            console.log(req.body)
        const newUser = new User(req.body);

        newUser.save((error, user)=> {
            if(error) {
                res.status(400).json({
                    error: 'Unable to register User'
                })
            } else {
                res.json({
                    message: 'registered successfully!',
                    user: user
                })
            }
        
    })
        }

})



}


exports.login = (req, res) => {
 
    const {username, password} = req.body;

    User.findOne({username}, (err, user) => {
      
       if(err) {
           console.log(err);
           return res.status(401).json({
               err: 'Invalid username or password'
           })
       }
       
           if(!user) {
            return res.status(401).json({
                message: "Invalid username!"
            })
           } else {
                          //test a matching password
         user.comparePassword(password, (error, isMatch) => {
            if(error) {
                return res.status(401).json({
                  error: "Invalid Password"
                })
            }
            user.password = undefined;
          return  res.json({
                login : isMatch,
                user: user
            })
        }) 
           }
       
    })
}