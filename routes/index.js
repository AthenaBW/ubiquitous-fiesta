const router = require('express').Router();
const apiRoutes = require ('./api-routes');

router.use ('/api', apiRoutes);
router.use((req, res)=>{
    return res.status(404).send('Error Not found');
});

module.exports = router;