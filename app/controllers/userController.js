// Importer le modèle User
const User = require('../models/User');

// Contrôleur pour créer un nouvel utilisateur
exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.create({ username, email, password });
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la création de l\'utilisateur.' });
    }
};

// Contrôleur pour connecter un utilisateur
exports.loginUser = async (req, res) => {
    try {
        // Logique de connexion de l'utilisateur
        // ...
        res.json({ message: 'Connexion réussie.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la connexion.' });
    }
};
