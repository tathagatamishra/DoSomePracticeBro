const express = require('express');
const router = express.Router();
const blogRoutes = require('./blogRoutes')
const userRoutes = require('./userRoutes')
const authRoutes = require('./authRoutes')



// Primary Route
router.get('/', (req, res) => {
  res.status(200).send({status: 'Primary Route'});
});

// Include Secondary Routes
router.use('/blogs', blogRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);


module.exports = router;
