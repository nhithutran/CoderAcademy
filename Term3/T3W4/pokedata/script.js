function getRandomNumberForPokeAPI() {
    return Math.floor(Math.random() * 900)
}
// Using Promise
/* function getPokemonData() {
//     const POKEAPI = "https://pokeapi.co/api/v2/pokemon/";
//     let fetchPromise = fetch(POKEAPI + getRandomNumberForPokeAPI())
//     .then(body => { return body.json()});

//     return fetchPromise;
// } 
*/

async function getPokemonData() {
    // using await
    const POKEAPI = "https://pokeapi.co/api/v2/pokemon/";
    let response = await fetch(POKEAPI + getRandomNumberForPokeAPI());
    let data = await response.json();

    return data;
}

/*
document.getElementById("button").addEventListener("click", () => {
    console.log("Clicked button to get random pokemon.");
    getPokemonData()
    // .then(data => console.log(data));
    .then(data => console.log("Name", data.name));
});
*/

// How would you get 5 pokemon?
// Example: Click the button and 5 pokemon names gets printed out

/*
document.getElementById("button").addEventListener("click", () => {
    console.log("5 pokemon names being printed out...");

    let names = [];

    getPokemonData()
    .then(data => {
        names.push(data.name);
        return getPokemonData();
    })
    .then(data => {
        names.push(data.name);
        return getPokemonData();
    })
    .then(data => {
        names.push(data.name);
        return getPokemonData();
    })
    .then(data => {
        names.push(data.name);
        return getPokemonData();
    })
    .then(data => {
        names.push(data.name);
        console.log("Pokemon names", names);
    })
    .catch(error => console.log("Error:", error));
});
*/

// Example using Promise.all

document.getElementById("button").addEventListener("click", () => {
    console.log("5 pokemon names being printed out...");

    let promises = [];

    for (let i=0; i <5; i++) {
        let promise = getPokemonData()
        .then(data => {
            throw new Error("oops");
            return data.name
        });
        
        promises.push(promise);
    }

    Promise.all(promises)
    .then(array => console.log("array", array))
    .catch(error => console.log("Error:", error));

});