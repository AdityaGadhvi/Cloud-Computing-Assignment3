/**
 * CarsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
getdata: function(req,res){
    Cars.find().exec(function (err, cars) {
        //return res.json(cars);
        return res.send({cars:cars});
        });
},
delete:function(req,res){
let query;  
query = { "carID": req.param('carID') }
Cars.destroy(query).fetch().exec(function (err, cars) {
if (err) return(err);
return res.json(cars)
})
},
findDataByID:function(req,res){
    let query;
    query = { "id": req.param('carid') }
    Cars.find(query).exec(function (err, cars) {
    if (err) return(err);
    return res.json(cars)
    })
    }
};

