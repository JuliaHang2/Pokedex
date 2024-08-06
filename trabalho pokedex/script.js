document.addEventListener('DOMContentLoaded', function() {
    const jsonData = [
        {
            "id": 1,
            "name": "Abra",
            "price": 1.00,
            "type": [
              "psychic"
            ],
            "stats": {
              "total": 310,
              "hp": 25,
              "attack": 20,
              "defense": 15,
              "sp-atk": 105,
              "sp-def": 55,
              "speed": 90
            }
          },
          {
            "id": 2,
            "name": "Aerodactyl",
            "price": 1.00,
            "type": [
              "rock",
              "flying"
            ],
            "stats": {
              "total": 515,
              "hp": 80,
              "attack": 105,
              "defense": 65,
              "sp-atk": 60,
              "sp-def": 75,
              "speed": 130
            }
          },
        {
            "id": 3,
            "name": "Venusaur",
            "type": ["grass", "poison"],
            "stats": {
                "total": 525,
                "hp": 80,
                "attack": 82,
                "defense": 83,
                "sp-atk": 100,
                "sp-def": 100,
                "speed": 80
            }
        },
        {
            "id": 4,
            "name": "Charmander",
            "type": ["fire"],
            "stats": {
                "total": 309,
                "hp": 39,
                "attack": 52,
                "defense": 43,
                "sp-atk": 60,
                "sp-def": 50,
                "speed": 65
            }
        },
        {
            "id": 5,
            "name": "Charmeleon",
            "price": 2.50,
            "type": ["fire"],
            "stats": {
                "total": 405,
                "hp": 58,
                "attack": 64,
                "defense": 58,
                "sp-atk": 80,
                "sp-def": 65,
                "speed": 80
            }
        }
    ];

    document.getElementById('pesquisar').addEventListener('click', function() {
        const searchQuery = document.getElementById('pesquisa').value.toLowerCase().trim();

 
        document.querySelectorAll('.card').forEach(card => {
            card.style.display = 'none';
        });

        jsonData.forEach(pokemon => {
            if (pokemon.name.toLowerCase() === searchQuery) {
                const card = document.querySelector(`.card[data-pokemon="${pokemon.name}"]`);
                if (card) {
                    card.style.display = 'block';
                    const description = `
                        Nome: ${pokemon.name} <br>
                        Tipo: ${pokemon.type.join(', ')} <br>
                        Total: ${pokemon.stats.total} <br>
                        HP: ${pokemon.stats.hp} <br>
                        Ataque: ${pokemon.stats.attack} <br>
                        Defesa: ${pokemon.stats.defense} <br>
                        Ataque Especial: ${pokemon.stats['sp-atk']} <br>
                        Defesa Especial: ${pokemon.stats['sp-def']} <br>
                        Velocidade: ${pokemon.stats.speed}
                    `;
                    card.querySelector('.description').innerHTML = description;
                }
            }
        });

        if (searchQuery === '') {
            document.querySelectorAll('.card').forEach(card => {
                card.style.display = 'block';
                card.querySelector('.description').innerHTML = ''; 
            });
        }
    });
});