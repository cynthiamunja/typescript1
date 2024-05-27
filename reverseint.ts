import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseInteger(input: number): number {
   
    const numStr = Math.abs(input).toString();

    
    const reversedStr = numStr.split('').reverse().join('');


    const reversedNum = parseInt(reversedStr);

    
    return  reversedNum;
}

rl.question('Enter a number: ', (answer) => {
    let entredNumber:number = parseInt(answer);
    
    console.log(reverseInteger(entredNumber));

    rl.close();
});

