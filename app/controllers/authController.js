// Importer le modèle User
const User = require('../models/User');

// Contrôleur pour l'inscription d'un nouvel utilisateur
exports.registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.create({ username, email, password });
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de l\'inscription de l\'utilisateur.' });
    }
};

// Contrôleur pour la connexion d'un utilisateur
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé.' });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Mot de passe incorrect.' });
        }

        res.json({ message: 'Connexion réussie.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la connexion.' });
    }
};
