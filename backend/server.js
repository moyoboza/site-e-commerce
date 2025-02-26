// backend/server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Définir une route de base
app.get('/', (req, res) => {
  res.send('Backend de l\'e-commerce!');
});

// API pour la fonctionnalité de paiement
app.post('/paiement', (req, res) => {
  const { montant, carte } = req.body;
  // Logique de paiement fictive
  res.json({ success: true, message: `Paiement de ${montant} effectué avec la carte ${carte}` });
});

// API pour la fonctionnalité d'avis produits
app.post('/avis-produits', (req, res) => {
  const { produitId, avis } = req.body;
  // Logique d'ajout d'avis (fictive)
  res.json({ success: true, message: `Avis ajouté pour le produit ${produitId}: ${avis}` });
});

// API pour la fonctionnalité de recherche avancée
app.get('/recherche', (req, res) => {
  const { query } = req.query;
  // Logique de recherche (fictive)
  res.json({ results: [`Produit 1: ${query}`, `Produit 2: ${query}`] });
});

// API pour la fonctionnalité du panier d'achat
app.post('/panier', (req, res) => {
  const { produitId, quantity } = req.body;
  // Logique d'ajout au panier (fictive)
  res.json({ success: true, message: `Produit ${produitId} ajouté au panier en quantité ${quantity}` });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur backend démarré sur http://localhost:${port}`);
});

