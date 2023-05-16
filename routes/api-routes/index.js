const router = require('express').Router();
// Importing thought and user routes
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// Endpoints for routes
router.use('/thought',thoughtRoutes);
router.use('/user',userRoutes);

// Router Export
module.exports = router;