const router = require("express").Router()
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require("../../controller/thought")

// /api/thoughts
router.route('/').get(getAllThought).post(createThought)

// /api/thoughts/:id
router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction)

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/api/thoughts/:thoughtId/reactions/reactionId").delete(deleteReaction)

module.exports = router