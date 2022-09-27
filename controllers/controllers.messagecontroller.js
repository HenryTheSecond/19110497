const {myGroup, listMSSV} = require('../models/models.mygroup')

function getMessage(req, res){
    if(req.params.id == null){
        var dataResponse = ''
        myGroup.forEach((item) => {
            dataResponse += `<html><body><ul><li>${item['name']}</li></ul></body></html>`
        })
        res.status(200).send(dataResponse)
    }else{
        const student = myGroup.find((item) => {
            return item['id'] === req.params.id
        })
        if(student == null){
            res.status(404).send('Not valid')
        } else{
            res.status(200).send(`<html><body><ul><li>${student['name']}</li></ul></body></html>`)
        }
    }
}

module.exports = {
    getMessage
}

