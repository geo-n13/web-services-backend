const express = require('express');
const app = express();
const port = 8000;

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API de mon application !');
});

// Lancement du serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
