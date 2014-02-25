function *getAllSquareNumbers() {
    for (var i = 1; ; i++) {
        // Every time we 'yield', this function's execution pauses until
        // the generator is restarted by a call to 'next' (see below).
        yield i * i;
    }
}

// Now let's fetch some values
var generator = getAllSquareNumbers();
console.log(generator.next().value); // Outputs '1'
console.log(generator.next().value); // Outputs '4'
console.log(generator.next().value); // Outputs '9'
console.log(generator.next().value); // Outputs '16'