const BlogModel = require('../models/blog');

// Create Blog
const createBlog = async (req, res) => {
    try {
        const { title, content, author, categories, tags, comments, imageUrl, metaData,
            imageAlt, url } = req.body;

        // Add any additional validation logic here\
        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required.' });
        }

        const newBlog =await BlogModel.create({
            title,
            content,
            author,
            categories,
            tags,
            comments,
            imageUrl,
            metaData,
            imageAlt, 
            url
        });

        res.status(201).send({status: "Blog Sucessfully Created", data: newBlog});
    } catch (error) {
        console.error('Error creating Blog:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Get all Blogs
const getAllBlog = async (req, res) => {
    try {
        const blogs = await BlogModel.find({ isDelete: false }).sort({ createdAt: -1 });
        res.status(200).send({status: "All Blog data get Sucessfully", data: blogs});
    } catch (error) {
        console.error('Error getting all blogs:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Get a specific Blog
const getBlog = async (req, res) => {
    try {
        const {blogUrl, id} = req.params;
        // const blog = await BlogModel.findById(id, isDelete:false);
        const blog = await BlogModel.findOne({url: blogUrl, isDelete:false});
        
        if (!blog) {
            return res.status(404).send('Blog not found');
        }
        
        res.status(200).send({status: "Blog data get Sucessfully", data: blog});
    } catch (error) {
        console.error('Error getting blog:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Update Blog
const updateBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        
        // Add any additional validation logic here
        const updatedBlog = await BlogModel.findByIdAndUpdate(
            blogId,
            req.body,
            { new: true } // Return the modified document
            );
            
            if (!updatedBlog) {
                return res.status(404).send('Blog not found');
            }
            
            res.status(200).send({status: "Blog Update Sucessfully", data: updatedBlog});
        } catch (error) {
            console.error('Error updating Blog:', error);
            res.status(500).send('Internal Server Error');
        }
};

// Delete Blog
const deleteBlog = async (req, res) => {
    try {
        const blogId = req.params.id;

        const deletedBlog = await BlogModel.findByIdAndUpdate(
            blogId,
            { isDelete: true },
            { new: true } // Return the modified document
            );
            
            if (!deletedBlog) {
                return res.status(404).send('Blog not found');
            }
            
            res.status(200).send({status: "Blog Delete Sucessfully"});
    } catch (error) {
        console.error('Error deleting blog:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = { createBlog, getAllBlog, getBlog, updateBlog, deleteBlog };
