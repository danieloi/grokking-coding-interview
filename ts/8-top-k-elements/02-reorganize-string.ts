import { MaxHeap } from "./utils";

function reorganizeString(str) {
    
    let charCounter = {};
    
    // Calculate the frequency of characters in string and
    // store counts of each character along with the
    // character itself in hash map.
    for (let i = 0; i < str.length; i++) {
        charCounter[str[i]] = charCounter[str[i]]
            ? charCounter[str[i]] + 1
            : 1;
    }

    // initialize a heap
    let mostFreqChars = new MaxHeap();

    // Store each character and its frequency in the heap
    for (let char in charCounter) {
        mostFreqChars.push([charCounter[char], char]);
    }

    // initialize variables
    let previous: [number, string] | null = null,
        result = "";

    while (mostFreqChars.size() || previous) {
        if (previous && mostFreqChars.size() == 0) {
            return "";
        }

        let element = mostFreqChars.pop(),
            count = element[0],
            char = element[1];
        result = result + char;
        count = count - 1;

        // pushing the char back to heap
        if (previous != null) {
            mostFreqChars.push(previous);
            previous = null;
        }

        // setting previous to the most recent used char
        if (count !== 0) {
            previous = [count, char];
        }
    }

    return result;
}







// Driver code
function main() {
    const testCases = [
        "programming",
        "hello",
        "fofjjb",
        "abbacdde",
        "aba",
        "",
        "awesome",
        "aaab",
    ];
    for (var i = 0; i < testCases.length; i++) {
        console.log(i + 1 + ".\tInput string:", '"' + testCases[i] + '"');
        console.log(
            "\tReorganized string:",
            '"' + reorganizeString(testCases[i]) + '"'
        );
        console.log("-".repeat(100));
    }
}

main();