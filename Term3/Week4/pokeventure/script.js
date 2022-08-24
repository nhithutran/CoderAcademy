function getRandomNumberForPokeAPI() {
    return Math.floor(Math.random() * 900)
}

async function getPokemonData() {
    // using await
    const POKEAPI = "https://pokeapi.co/api/v2/pokemon/";
    let response = await fetch(POKEAPI + getRandomNumberForPokeAPI());
    let data = await response.json();

    let type = data.types[0] ? data.types[0].type.name : "N/A";
    let filteredData = {
        name: data.name.toUpperCase(),
        sprites: data.sprites,
        type: type
    }
    
    showPokemonData(filteredData);
    return filteredData;
}

function getSprite(sprites){
    // Can also do:
    // sprites.front_default || sprites.versions["generation-viii"].icons.front_default

    let newVersionSpriteUrl = sprites.versions["generation-viii"].icons.front_default;
    return sprites.front_default ? sprites.front_default : newVersionSpriteUrl;
}

function showPokemonData(data) {
    let container = document.getElementById("container");

    // create image
    
    let pokemonImage = document.createElement("img"); // create img tag
    pokemonImage.id = data.name; // adding and setting the img id to the pokemon name
    pokemonImage.classList.add("pokemon"); // adding class as "pokemon" to the img

    let spriteUrl = getSprite(data.sprites);
    pokemonImage.src = spriteUrl;

    container.append(pokemonImage);
}


function clearButton() {
    let button = document.getElementById("button");
    button.remove();
}

function updateMessage() {
    let message = document.getElementById("message");
    message.textContent = "Choose your Pokemon! (Click on one).";
}


function listenToStartGameClicked(pokemon) {
    document.getElementById("start-game-button").addEventListener("click", (event) => {
        console.log("start-game-button clicked", event);
        clearScreen();
        startGame(pokemon);
    });
}

function clearScreen() {
    // document.body.innerHTML = ''; // this works
    // document.body.children.forEach(el => body.remove(el)); // cant use foreach

    // document.style.display = "none";
    // could also body.remove() and then add a new body

    let intro = document.getElementById("intro");
    intro.remove();

    let startGameButton = document.getElementById("start-game-button");
    startGameButton.remove();
}

function startGame(pokemon) {
    showInstructions();
    addBackground();
    let imageSrc = getSprite(pokemon.sprites);
    showPlayingPokemon(imageSrc);
    listenToClicksOnMap();
}

function showInstructions() {
    let game = document.getElementById("game");

    let instruction = document.createElement("p");
    instruction.id = "instruction";
    instruction.textContent = "Take this pokemon for an adventure. Move it by clicking on the map.";

    game.append(instruction);
}

function addBackground() {
    let bg = document.createElement("img");
    const imageSource = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5aacf438-4ca1-4094-9487-0114a51f5e92/d47z8wm-d9a8b8fd-ed88-4b09-8db2-f416c81813e4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVhYWNmNDM4LTRjYTEtNDA5NC05NDg3LTAxMTRhNTFmNWU5MlwvZDQ3ejh3bS1kOWE4YjhmZC1lZDg4LTRiMDktOGRiMi1mNDE2YzgxODEzZTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rtwuALFZFZxSC1aiiP77eWM8KjoaslvjTG-Tfr1VRFw";
    bg.src = imageSource;
    bg.alt = "https://www.deviantart.com/segesi/art/Viridian-Forest-Again-255266518";
    bg.id="background";
    document.body.append(bg);
}

function showPlayingPokemon(imageSrc){
    let pokemonImage = document.createElement("img");
    pokemonImage.id = "playingPokemon";
    pokemonImage.src = imageSrc;
    pokemonImage.style.position = "absolute";

    document.body.append(pokemonImage);
}

function listenToClicksOnMap() {
    let background = document.getElementById("background");
    background.addEventListener("click", movePokemon);
}

function movePokemon(event) {
    let playingPokemon = document.getElementById("playingPokemon");
    let posX = event.pageX;
    let posY = event.pageY;

    let imgWidth = playingPokemon.clientWidth;
    let imgHeight = playingPokemon.clientHeight;
    let midX = imgWidth/2;
    let midY = imgHeight/2;
    playingPokemon.style.top = `${posY-midX}px`;
    playingPokemon.style.left = `${posX-midY}px`;

}

function listenToClicksOnPokemon(data) {

    // loop through each pokemon
    for(let i=0; i<data.length; i++) {
        // get pokemon name
        let pokemon = data[i];
        let name = pokemon.name;
    
        document.getElementById(name).addEventListener("click", (event) => {
            console.log(name, "- Event: ", event)
            showDescription(pokemon);
            showStartGameButton();
            listenToStartGameClicked(pokemon);
        });
    }
}

function showDescription(pokemon) {
    let description = document.getElementById("description");
    description.textContent = `You clicked on ${pokemon.name} which is ${pokemon.type}!`;
}

function showStartGameButton() {
    let game = document.getElementById("game");

    let button = document.getElementById("start-game-button");
    if(!button) {
        let button = document.createElement("button");
        button.id = "start-game-button";
        button.textContent = "Take this Pokemon for an adventure!"
        game.append(button);
    }

}

document.getElementById("button").addEventListener("click", () => {
    let promises = [];

    for (let i=0; i <5; i++) {
        let pokemonData = getPokemonData();
        promises.push(pokemonData);
    }

    Promise.all(promises)
    .then(data => {
        console.log("data", data);
        clearButton();
        updateMessage();
        listenToClicksOnPokemon(data);
    })
    .catch(error => console.log("Error:", error));

});