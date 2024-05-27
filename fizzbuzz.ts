import * as readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function fizzBuzz(fizznumber: number): void {
    for (let i = 1; i <= fizznumber; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}


rl.question('Enter a number: ', (answer) => {
    const number = parseInt(answer);

    if (isNaN(number) || number <= 0) {
        console.log("Please enter  number.");
    } else {
        fizzBuzz(number);
    }


    rl.close();
});
