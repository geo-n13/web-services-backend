const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route pour ajouter un film à la liste noire (authentification requise)
router.post('/movies/blacklist', authMiddleware.authenticateUser, movieController.addToBlacklist);

// Route pour ajouter un film à la liste de favoris (authentification requise)
router.post('/movies/likelist', authMiddleware.authenticateUser, movieController.addToLikelist);

module.exports = router;
