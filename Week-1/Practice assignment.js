/* Assignment #1:
What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it? */

const crypto = require("crypto");

// Function to find an input string that produces a hash string that starts with 00000

function hashWithPrefix(prefix) {
    let input1 = 0;

    while (true) {
        let inputstr1 = input1.toString();
        let hash = crypto.createHash("sha256").update(inputstr1).digest("hex");

        if (hash.startsWith(prefix)) {
            return { input: inputstr1, hash: hash };
        }
        input1++;
    }
}

const result = hashWithPrefix("00000");
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);


/* Assignment #2
What if I ask you that the input string should start with 100xdevs ? How would the code change? */

function hashWithPrefix2(prefix) {
    let input2 = 0;

    while (true) {
        let inputstr2 = "100xdevs"+input2.toString();
        let hash = crypto.createHash("sha256").update(inputstr2).digest("hex");

        if (hash.startsWith(prefix)) {
            return { input: inputstr2, hash: hash };
        }
        input2++;
    }
}

const result2 = hashWithPrefix2("00000");
console.log(`Input: ${result2.input}`);
console.log(`Hash: ${result2.hash}`);


// Assignment #3
// What if I ask you to find a nonce for the following input - 
// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10


function hashWithPrefix3(prefix) {
    let input3 = 0;

    while (true) {
        let inputstr3 = `
    harkirat => Raman | Rs 100
    Ram => Ankit | Rs 10
    `
        +input3.toString();
        let hash = crypto.createHash("sha256").update(inputstr3).digest("hex");

        if (hash.startsWith(prefix)) {
            return { input: inputstr3, hash: hash };
        }
        input3++;
    }
}

const result3 = hashWithPrefix3("00000");
console.log(`Input: ${result3.input}`);
console.log(`Hash: ${result3.hash}`);