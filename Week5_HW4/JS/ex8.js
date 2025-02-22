// Function to count vowels (a, e, i, o, u, y) case-insensitively

function countVowels(word)

{
    const lowerWord = word.toLowerCase();
    const vowels = ['a','e','i','o','u','y'];
    let count = 0;
    for (const char of lowerWord)
        
    {
        if (vowels.includes(char))
        
        {
            count++;
        }
    }
    return count;
}

// Function to check if word is a palindrome (case-insensitive)

function isPalindrome(word)

{
    const lowerWord = word.toLowerCase();
    const reversedWord = lowerWord.split('').reverse().join('');
    return lowerWord === reversedWord;
}

// Main program

const word = prompt("Hello! Please enter a word:");
const vowelCount = countVowels(word);
const palindromeCheck = isPalindrome(word);

console.log(`${word} has ${vowelCount} vowels and ${palindromeCheck ? 'is a palindrome' : 'isnt a palindrome'}`);