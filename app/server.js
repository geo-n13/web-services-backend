const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

app.use(cors());
app.use(express.json());

// Connexion à la base de données MongoDB
mongoose.connect('mongodb+srv://epsi_movie:1234movie@moviecluster.88wl31k.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connexion à la base de données réussie');
    })
    .catch((error) => {
        console.error('Erreur lors de la connexion à la base de données', error);
    });

app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API de mon application !');
});

app.use('/api', authRoutes);

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
