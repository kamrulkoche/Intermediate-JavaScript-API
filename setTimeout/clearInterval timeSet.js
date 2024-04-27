function tellJoke() {
    console.log("Why don't scientists trust atoms? Because they make up everything!");
}

const jokeInterval = setInterval(tellJoke, 2000); // Log a joke every 2 seconds



// After 10 seconds, stop telling jokes
setTimeout(() => {
    clearInterval(jokeInterval); // Stop the interval
}, 10000); // 10 seconds
