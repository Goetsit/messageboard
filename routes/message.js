var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({username: String, message: String});

var Message = mongoose.model('Message', MessageSchema, 'messages');



//POST Route

router.post('/', function(req, res) {
    console.log(req.body);
    var messageToAdd = new Message(req.body);
    messageToAdd.save(function(err, data){
        if(err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    }); // END SAVE
}); // END POST Route


// GET Route
router.get('/', function(req, res){
    Message.find({}, function (err, foundMessage) {
        if (err) {
            console.log("ERROR! : ", err);
            res.sendStatus(500);
        }else {
            res.send(foundMessage);
        }
    }); // END FIND
});


module.exports = router;