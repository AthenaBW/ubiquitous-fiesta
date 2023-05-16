const router = require ('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    deleteThought,
    updateThoughtById,
    createReaction,
    deleteReaction,
} = require ('../../controllers/thought-controller');

// GET all thoughts POST create thought route
router.route('/').get(getAllThoughts).post(createThought);

// POST create a reaction route

router.route('/:thoughtId/reactions').post(createReaction);

// DELETE reaction route

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// GET PUT DELETE thought routes 
router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);

// Router export
module.exports= router;