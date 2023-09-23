const express = require('express')
const router = express.Router()
const People = require('../models/people')

router.get('/', async(req, res)=>{
    try{
        
    }catch(error){

    }
})
router.post('/', async(req, res)=>{
    try{
        res.json(await People.create(req.body))
    }catch(error){
        res.status(400).json(error)
    }
})


module.exports = router