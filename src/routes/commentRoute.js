module.exports = (server) => {
    const commentController = require('../controllers/commentController');

    server.route('/comments')
    .get(commentController.listenAllComments)
    .post(commentController.createAComment);
}

const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');


// /comments
router
    .route('/com')
    .get(commentController.listAllComments)
    .post(commentController.createAComment);


// /comments/:id_comment
// :id_comment = req.params.id_comment
router
    .route('/:id_post')
    .get(commentController.getAComment)
    .put(commentController.updateAComment)
    .delete(commentCotroller.deleteAComment)

    module.exports = router;