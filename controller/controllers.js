const db = require("../models/bookModel");

module.exports = {

    findAll: function(req, res) {
        db.Books
        .find(req.query)
        .sort({date: -1})
        .then(function(dbModel) {
            res.json(dbModel)
        })
        .catch(function(err){
            res.status(422).json(err)
        });
    },

    create: function (req, res) {
        db.Books
            .create(req.body)
            .then(function(dbModel) { 
                res.json(dbModel)
            })
            .catch(function(err) {
                res.status(422).json(err)
            });
    },
    remove: function(req, res) {
        db.Books.findById({ _id: req.params.id })
        .then(function(dbModel){ 
            dbModel.remove()
        })
        .then(function(dbModel) {
            res.json(dbModel)
        })
        .catch(function(err){ 
            res.status(422).json(err)
        });
    }
};