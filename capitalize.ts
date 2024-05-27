import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function capitalizeFirstLetterOfEachWord(input: string): string {
    
    const sentence = input.split(" ");

    
    const capitalizedWords = sentence.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Join the capitalized words back into a single string
    return capitalizedWords.join(" ");
}


rl.question('Enter a sentence: ', (answer) => {
    let words:string = (answer);
    
    console.log(capitalizeFirstLetterOfEachWord(words));

    rl.close();
});

