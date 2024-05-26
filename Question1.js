// question one, Kata challenges.

function solution(S) {
    // Iterate through each string in the array
    for (let i = 0; i < S.length; i++) {
        const s1 = S[i];
        
        // Iterate through the rest of the strings in the array
        for (let j = i + 1; j < S.length; j++) {
            const s2 = S[j];
            
            // Iterate through each character position in the strings
            for (let k = 0; k < s1.length; k++) {
                // If the characters at the current position in both strings are equal
                if (s1[k] === s2[k]) {
                    // Return the indexes of the strings and the position of the common letter
                    return [i, j, k];
                }
            }
        }
    }
    
    // If no pair of strings shares a common letter, return an empty array
    return [];
}

// Example usage
const S = ["gr", "sd", "rg"];
console.log(solution(S)); // Output: [0, 2, 1]

const S2 = ["zzzz", "ferz", "zdsr", "fgtd"];
console.log(solution(S2)); 