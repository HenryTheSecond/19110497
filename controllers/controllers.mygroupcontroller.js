const {myGroup, listMSSV} = require('../models/models.mygroup')

function getAllMyGroup(req, res){
    res.status(200).json(myGroup)
}

module.exports = {
    getAllMyGroup
}