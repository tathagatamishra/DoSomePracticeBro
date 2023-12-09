const express = require('express');
const router = express.Router()
const { createBlog, getAllBlog,  getBlog, updateBlog, deleteBlog } = require('../controllers/blogController');
 

// Testing Exam Api 
router.get('/', (req, res)=>{
    res.status(200).send({status: "Blog Route is Working"})
})

// CRUD operations
router.post('/createblog', createBlog); // Create
router.get('/getallblog', getAllBlog); // Read
router.get('/getblog/:blogUrl', getBlog); // Read
router.put('/updateblog/:id', updateBlog); // Update
router.delete('/deleteblog/:id', deleteBlog); // Delete


module.exports = router