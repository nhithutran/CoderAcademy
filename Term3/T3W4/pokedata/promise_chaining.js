

// .then(onFulfilled)
// .then(onFulfilled, onRejected)

function failureCallback(error) {
    console.error(`Error: ${error}`);
}

function successCallback(result) {
    console.log(`Success with result: ${result}`);
}

function getPokemonGreeting(pokemon, sound) {
    return new Promise((resolve, reject) => {
        if (typeof pokemon !== 'string') {
            reject(new Error("Input must be a string.")); // rejected!
        } 
        resolve(`${pokemon} says ${sound}`); // promise is fulfilled
    })
}

/*
const promise = getPokemonGreeting(5, "rawr");
// Note that the .then() function returns a new promise
const promise2 = promise.then(successCallback, failureCallback);
*/

function getTrainerGreeting(trainer) {
    return new Promise((resolve, reject) => {
        if (typeof trainer !== 'string') {
            reject(new Error("Input must be a string."));
        }
        resolve(`${trainer} says gotta catch 'em all!`);
    })
}

function printCapitalisedText(text) {
    return new Promise((resolve, reject) => {
        if (typeof text !== 'string') {
            reject(new Error("Input must be a string."));
        }
        let upperText = text.toUpperCase();
        console.log(upperText);
    })
}

getPokemonGreeting("Jigglypuff", "jiggly jiggly")
.then(greeting => {
    console.log("Greeting:", greeting);
    return greeting;
})
.then(greeting => {
    printCapitalisedText(greeting);
    // What you want to say on the mxt promise
    return "Ash";
})
.then(getTrainerGreeting)
.then(result => console.log(result));