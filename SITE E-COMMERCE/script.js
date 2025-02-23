console.log("script.js est bien chargé !");

function envoyerPaiement() {
    const montant = document.getElementById('montant').value;
    const carte = document.getElementById('carte').value;

    fetch('http://localhost:3000/paiement', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ montant, carte })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultat').innerText = `Réponse: ${data.message}, Carte: **** **** **** ${data.carteMasquee}`;
    })
    .catch(error => console.error('Erreur:', error));
}

