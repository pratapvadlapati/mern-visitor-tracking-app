const Visitor = require('../models/visitor');


exports.getUserById = (req, res, next, id) => {

    Visitor.findById(id).exec((err, visitor) => {

        if (err || !visitor) {
            return res.status(404).json({
                err: "visitor doesnt exist"
            })
        }
        req.profile = visitor;
        next();
    })
}



exports.visitorLogin = (req, res) => {

    const { name, tokenId, phone } = req.body;


    Visitor.findOneAndUpdate({ phone: phone },
        { $set: { loggedin: new Date().toLocaleString(), loggedout: '', loggedinStatus: true } },
        { new: true, useFindAndModify: false },
        (error, visitor) => {
            if (error) {
                return res.status(400).json({
                    err: 'pls try again!'
                })
            }
            if (visitor) {

                return res.json({
                    message: 'success',
                    data: visitor
                })

            } if (visitor == undefined | '') {
                const newvisit = new Visitor({
                    name,
                    tokenId,
                    phone,
                    "loggedin": new Date(Date.now()),
                    "loggedinStatus": true
                })

                newvisit.save((error, data) => {
                    if (error) {
                        console.log(error)
                        return res.status(400).json({
                            err: 'Unable to login visitor!!'
                        })
                    }
                    return res.json({
                        message: 'success',
                        data: data
                    })
                })
            }

        })

}


exports.visitorLogout = (req, res) => {
    //  console.log(req.profile)
    const id = { '_id': req.profile._id }
   

    const logHistory = {
        arrived: req.profile.loggedin,
        left: Date.now()
    }


    Visitor.findOneAndUpdate(id,
        {
            $set: { loggedout: Date.now(), loggedinStatus: false },
            $push: {
                history: logHistory
            }

        },
        { new: true },
        (error, doc) => {

            if (error) {
                console.log(error)
                return res.status(400).json({
                    err: 'Unable to logout try again..'
                })
            } else {
                return res.json(doc)
            }
        })
}



//visitor status

exports.visitorStatus = (req, res) => {
//console.log(req.profile)
/* 
    const { loggedin, name } = req.profile;

    const datetime = new Date(loggedin)

    return res.json({
        visitorname: name,
        status: `loged in since  ${datetime.toLocaleString()}`
    }) */

    Visitor.find({loggedinStatus: true}, (error, data) => {
        if(error) {
            console.log(error);
            
        } else {
          const statusObj =  data.map((visitor) => {
              
                const { name, loggedin } = visitor;
                const datetime = new Date(loggedin);
                const dtString = datetime.toString().substring(0, 25).trimRight();
                const status = `Loggedin since ${dtString}`
            
                const visitorObj = {}

                visitorObj.id = visitor._id;
                visitorObj.visitorname = visitor.name;
                visitorObj.status = status;
                return visitorObj;
              
              
            })
            res.json(statusObj)
        }
    })

}