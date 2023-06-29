// Importer le modèle User
const User = require('../models/User');
const jwt = require('jsonwebtoken');

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
        const { identifier, password } = req.body;

        // Rechercher l'utilisateur par e-mail ou nom d'utilisateur
        const user = await User.findOne({ $or: [{ email: identifier }, { username: identifier }] });

        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé.' });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Mot de passe incorrect.' });
        }

        // Générer un token JWT
        const token = jwt.sign({ userId: user._id }, '6da1cb66feaaf6be4df8cab56f8384f73ba1ed0758c6efa1c45e3c5870d30495', { expiresIn: '1h' });

        // Renvoyer le token JWT dans la réponse
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la connexion.' });
    }
};

