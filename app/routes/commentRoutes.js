const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route pour récupérer tous les commentaires
router.get('/comments', commentController.getComments);

// Route pour créer un nouveau commentaire (authentification requise)
router.post('/comments', authMiddleware.authenticateUser, commentController.createComment);

module.exports = router;
