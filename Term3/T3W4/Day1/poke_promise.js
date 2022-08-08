/*
function getPokemonGreeting(pokemon, sound) {
    return new Promise((resolve, reject) => {
        resolve(`${pokemon} says ${sound}`);
    });
}

// getPokemonGreeting("Pikachu", "pika!");

getPokemonGreeting("Snorlax", "zzzzzz")
.then(greeting => console.log("Greeting:", greeting));
*/

/*
// Example with reject and finally
function getPokemonGreeting(pokemon, sound) {
    return new Promise((resolve, reject) => {
        if (typeof pokemon !== 'string') {
            reject(new Error("Input must be a string."));
        }
        else if (pokemon === "meowth") {
            reject(new Error("Meowth speaks human."));
        }
        resolve(`${pokemon} says ${sound}`);
    });
}

// getPokemonGreeting(1, "squirtle!!!")
// .then(greeting => console.log("Greeting:", greeting))
// .catch(error => console.log(error.message));

getPokemonGreeting("squirtle", "hi!!!")
.then(greeting => console.log("Greeting:", greeting))
.catch(error => console.log(error.message))
.finally(() => console.log("Promise finished!"));
*/


// Example with timeout
function getPokemonGreetingWithTimeout(pokemon, sound) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof pokemon !== 'string') {
                reject(new Error("Input must be a string."));
            }
            resolve(`${pokemon} says ${sound}`);
        }, 3000); // 3 seconds

    })
}


let greeting = getPokemonGreetingWithTimeout(5, "grrr");

greeting
.then(greeting => console.log("Greeting:", greeting))
.catch(error => console.log(error.message))
.finally(() => console.log("Promise finished!"));

console.log(greeting);