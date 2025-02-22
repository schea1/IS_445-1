// Initialize an empty array to store the words
const words = [];

// Loop to accept user input
while (true)
  
{
    // Prompt the user for a word
    const input = prompt("Enter a word (type 'stop' to finish):");

    // Check if the input is "stop" (case insensitive)
    if (input.toLowerCase() === "stop")
    
    {
        // Exit the loop if "stop" is entered
        break;
    }

    // Add the word to the array if it's not "stop"
    words.push(input);
}

// Check if the array is empty (i.e., "stop" was the first word entered)
if (words.length === 0)

{
    console.log("There's nothing to display, 'stop' was the first word entered.");
} else


{
    // Display the words entered
    console.log("You entered the following words:");
    for (const word of words)
      
    {
        console.log(word);
    }
}