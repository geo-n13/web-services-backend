// Importer le modèle Comment
const Comment = require('../models/Comment');

// Contrôleur pour récupérer tous les commentaires
exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des commentaires.' });
    }
};

// Contrôleur pour créer un nouveau commentaire
exports.createComment = async (req, res) => {
    try {
        const { content, userId } = req.body;
        const comment = await Comment.create({ content, userId });
        res.status(201).json(comment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la création du commentaire.' });
    }
};
