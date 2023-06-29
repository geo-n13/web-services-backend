// Importer le modèle Movie
const Movie = require('../models/Movie');

// Contrôleur pour ajouter un film à la liste noire
exports.addToBlacklist = async (req, res) => {
    try {
        const { movieId } = req.body;
        const movie = await Movie.findByIdAndUpdate(movieId, { blacklist: true }, { new: true });
        res.json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de l\'ajout du film à la liste noire.' });
    }
};

// Contrôleur pour ajouter un film à la liste de favoris
exports.addToLikelist = async (req, res) => {
    try {
        const { movieId } = req.body;
        const movie = await Movie.findByIdAndUpdate(movieId, { likelist: true }, { new: true });
        res.json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de l\'ajout du film à la liste de favoris.' });
    }
};
