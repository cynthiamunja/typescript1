import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countVowels(sentence: string): number {
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const lowerSentence = sentence.toLowerCase();

    let vowelCount = 0;

    for (const char of lowerSentence) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}

rl.question('Enter a sentence: ', (answer) => {
    let entredSentence:string = (answer);
    
    console.log(countVowels(entredSentence));

    rl.close();
});

