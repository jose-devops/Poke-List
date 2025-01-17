document.addEventListener('DOMContentLoaded', fetchPokemon);

function fetchPokemon() {
    for (let i = 1; i <= 100; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response => response.json())
            .then(data => createPokemonCard(data));
    }
}

function createPokemonCard(pokemon) {
    const container = document.getElementById('poke-container');
    const card = document.createElement('div');
    card.classList.add('card');

    const pokeType = pokemon.types[0].type.name;
    card.classList.add(pokeType);

   

    const pokeInnerHTML = `
        <h4>#${pokemon.id}</h4><br>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"><br><br>
        <h4>${pokemon.name}</h4>
        
       
        
    `;

    card.innerHTML = pokeInnerHTML;
    container.appendChild(card);
}