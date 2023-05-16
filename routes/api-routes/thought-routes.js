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

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId/reactions').post(createReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);

module.exports= router;