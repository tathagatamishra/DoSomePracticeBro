const express = require('express');
const router = express.Router()
const { login } = require('../controllers/authController');
 

// Testing Exam Api 
router.get('/', (req, res)=>{
    res.status(200).send({status: "Auth Route is Working"})
})

// CRUD operations
router.post('/login', login); // login


module.exports = router