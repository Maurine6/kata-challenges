// question 2 Kata challenges.

function findLongestSpikedSequence(arr) {
    let S = new Set(); // Use a Set to avoid duplicates
    let ans = 0; // Initialize the maximum length of a spike

    // Add all elements of the array to the Set
    for (let i = 0; i < arr.length; i++) {
        S.add(arr[i]);
    }

    // Iterate through the array to find the longest spike
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element minus 1 exists in the Set
        if (!S.has(arr[i] - 1)) {
            // Start counting the length of the spike from the current element
            let j = arr[i];
            let count = 1; // Count the length of the spike

            // Keep incrementing the counter as long as the next element exists in the Set
            while (S.has(j)) {
                j++;
                count++;
            }

            // Update the maximum length of a spike if necessary
            //ans = Math.max(ans, count);
            ans = count;
        }
    }

    return ans;
}

// Example usage
let arr = [2, 3, 3, 2, 2, 2, 1];
console.log("Length of the Longest spiked sequence is " + findLongestSpikedSequence(arr));