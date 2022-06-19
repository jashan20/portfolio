const express = require('express')
const contactrouter = express.Router()
const mongoose = require('mongoose')

const Contact = require("../models/contact")

contactrouter.post('/', (req,res) => {
    console.log(req.body);
    const { name,email,subject,message } = req.body
    if(!name){
        return res.status(422).json({
            error: "Please fill all student name"
        })
    }
    const contacts = new Contact(req.body)
    contacts.save((err, contacts) => {
        if(err){
            return res.status(400).json({
                message: "NOT able to save class in the Database",
                error: err
            })
        }
        res.redirect('/')
    })
});
  
// Get Route
contactrouter.get('/', (req,res)=>{
    res.render('index');
    // res.send("Message has been sent Successfully")
})


module.exports = contactrouter