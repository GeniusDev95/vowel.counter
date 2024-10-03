var userText = prompt("Type a sentence to count vowel in it");
var userInput = userText.toLowerCase();
var result = 0;

for(i=0; i<userInput.length; i++){
    if(userInput.charAt(i) === "a" || userInput.charAt(i) === "e" || userInput.charAt(i) === "i" || userInput.charAt(i) === "o" || userInput.charAt(i) === "u"){
        result++;
    }
}
alert(`The total number of vowels in a given sentence are ${result}`)