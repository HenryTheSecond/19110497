const {myGroup, listMSSV} = require('../models/models.mygroup')

function addToMyGroup(req, res, next){
    const student = req.body
    if(listMSSV.includes(student['id']) && myGroup.find((item) => {return item['id'] === student['id']}) == null){
        myGroup.push(student)
        res.status(200).json(student)
    }else{
        console.log('Not valid')
        res.send('not valid')
    }
}

function getById(req, res){
    const id = req.params.id
    const student = myGroup.find((item) => {
        return item['id'] === id
    })
    if(student){
        res.status(200).json(student)
    }else{
        res.status(404).json({error: 'not valid'})
    }
}

module.exports = {
    addToMyGroup,
    getById
}