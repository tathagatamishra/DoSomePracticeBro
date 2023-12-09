const express = require('express');
const router = express.Router()
const { createUser, getAllUser, getUser, updateUser, deleteUser} = require('../controllers/userController');
 

// Testing Exam Api 
router.get('/', (req, res)=>{
    res.status(200).send({status: "User Route is Working"})
})

// CRUD operations
router.post('/createuser', createUser); // Create
router.get('/getalluser', getAllUser); // Read
router.get('/getuser/:id', getUser); // Read
router.put('/updateuser/:id', updateUser); // Update
router.delete('/deleteuser/:id', deleteUser); // Delete


module.exports = router