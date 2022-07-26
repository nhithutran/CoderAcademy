
// this is a function declaration
// function welcomeMessage() {
//     return "Welcome friend to this amazing viday game!";
// }

// function expression more flexable in that you can pass into a different function
// Not hoisted need to define before using
// More info bout function expressions
// https://www.sitepoint.com/when-to-use-a-function-expression-vs-function-declaration/ 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function#named_function_expression

const welcomeMessage = function displayWelcomeMessage() {
    return "Welcome friend to this amazing viday game!";
}

// Dependency injection
function startGame(getWelcomeMsg, getPlayerName) {
    let welcomeMessage = getWelcomeMsg();
    console.log(welcomeMessage);

    const playerName = getPlayerName();
    console.log(`OK! Your player name is ${playerName}`);

    return new Player(playerName);
}

module.exports = {
    welcomeMessage, startGame
};