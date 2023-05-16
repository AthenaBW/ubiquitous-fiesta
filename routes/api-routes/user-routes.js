// Import dependencies
const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    addFriend,
    removeFriend, } = require ('../../controllers/user-controller'); 

    // GET & POST for all users
router.route('/').get(getAllUsers).post(createUser);

// POST add friend DELETE remove friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

// GET user ID PUT update user by ID DELETE delete user by ID
router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

module.exports = router;