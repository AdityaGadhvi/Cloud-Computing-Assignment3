/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    getdata: function(req,res){
        User.find().exec(function (err, users) {
            return res.json(users);
            });
    },
    delete:function(req,res){
    let query;
    query = { "id": req.param('userid') }
    User.destroy(query).fetch().exec(function (err, users) {
    if (err) return(err);
    return res.json(users)
    })
    },
    findDataByID:function(req,res){
        let query;
        query = { "id": req.param('userid') }
        User.find(query).exec(function (err, users) {
        if (err) return(err);
        return res.json(users)
        })
        },
        findDataByName:function(req,res){
            let query;
            query = { "userName": req.param('userName') }
            User.find(query).exec(function (err, users) {
            if (err) return(err);
            return res.json({users:users})
            })
            },   
    joindata:function(req,res){
        let query;
        query="select * from user inner join cars on user.userID=cars.carID"
        User.query(query,function (err, users) {
    
            if (err) return res.serverError(err);
            let userresults=JSON.parse(JSON.stringify(users.rows))
            return res.send({userresults:users.rows});
        });
    }

};

