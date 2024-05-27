function generateFibonacciSequence(maxValue: number): number[] {
    const fibonacciSequence: number[] = [0, 1];

    for (let i = 2; ; i++) {
        const nextFibonacciNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        if (nextFibonacciNumber <= maxValue) {
            fibonacciSequence.push(nextFibonacciNumber);
        } else {
            break;
        }
    }

    return fibonacciSequence;
}

const max = 100;
const fibonacciSequence = generateFibonacciSequence(max);
console.log("Fibonacci sequence up to", max, ":", fibonacciSequence.join(", "));
