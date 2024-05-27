import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (answer) => {
    let number:number = parseInt(answer);
    let isPowerof2:boolean=true

    if (isNaN(number) || number <= 0) {
        console.log("Please enter a positive number.");
    } else {
        if ((number & (number - 1)) === 0) {
            console.log(isPowerof2);
        } else {
            console.log(!isPowerof2);
        }
    }

    rl.close();
});
