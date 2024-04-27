async function fetchDataAndLogMessage() {
    try {
        // Fetch data from the API
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
        const data = await response.json();

        //  console.log(data);
        // Check if there was an error in the response
        if (!data.error) {
            // Log the joke message
            console.log(`Joke: ${data.error}`);
        } else {
            // Log an error message if there was an error in the response
            console.error('Failed to fetch joke:', data.error);
        }
    } catch (error) {
        // Log an error message if there was an error in the request
        console.error('Error fetching data:', error);
    }
}

// Call the function to fetch data and log the message
fetchDataAndLogMessage();
