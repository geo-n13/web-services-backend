const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware pour vérifier l'authentification de l'utilisateur
exports.authenticateUser = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Accès non autorisé. Token manquant.' });
    }

    try {
        const decoded = jwt.verify(token, '6da1cb66feaaf6be4df8cab56f8384f73ba1ed0758c6efa1c45e3c5870d30495');
        const userId = decoded.userId;

        User.findById(userId, (err, user) => {
            if (err || !user) {
                return res.status(401).json({ message: 'Accès non autorisé. Utilisateur non trouvé.' });
            }

            req.user = user;
            next();
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de l\'authentification.' });
    }
};
