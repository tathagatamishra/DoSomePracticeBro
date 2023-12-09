const userModel = require('../models/user');


// Create User
const createUser = async (req, res) => {
    try {
        const { name, username, password, email, mobile } = req.body;

        // Add any additional validation logic here\
        if (!username || !password || !email) {
            return res.status(400).json({ error: 'Title and content are required.' });
        }

        const newUser =await userModel.create({
            name, username, password, email, mobile
        });

        res.status(201).send({status: "User Sucessfully Created", data: newUser});
    } catch (error) {
        console.error('Error creating User:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Get all User
const getAllUser = async (req, res) => {
    try {
        const users = await userModel.find({ isDelete: false });
        res.status(200).send({status: "All User data get Sucessfully", data: users});
    } catch (error) {
        console.error('Error getting all Users:', error);
        res.status(500).send('Internal Server Error');
    }
};


// Get a specific User
const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userModel.findById(userId);
        
        if (!user) {
            return res.status(404).send('User not found');
        }
        
        res.status(200).send({status: "User data get Sucessfully", data: user});
    } catch (error) {
        console.error('Error getting User:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Update User
const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        

        // Add any additional validation logic here
        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            req.body,
            { new: true } // Return the modified document
            );
            
            if (!updatedUser) {
                return res.status(404).send('User not found');
            }
            
            res.status(200).send({status: "User Update Sucessfully", data: updatedUser});
        } catch (error) {
            console.error('Error updating User:', error);
            res.status(500).send('Internal Server Error');
        }
};

// Delete User
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const deletedUser = await userModel.findByIdAndUpdate(
            userId,
            { isDelete: true },
            { new: true } // Return the modified document
            );
            
            if (!deletedUser) {
                return res.status(404).send('User not found');
            }
            
            res.status(200).send({status: "User Delete Sucessfully"});
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = { createUser, getAllUser, getUser, updateUser, deleteUser };
