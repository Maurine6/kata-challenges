function sumOfDigits(num) {
    return num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
}

function solution(A) {
    const n = A.length;
    
    // Calculate the minimum and second minimum sum of digits for each number
    let minSum = Infinity;
    let secondMinSum = Infinity;
    
    for (let num of A) {
        const digitSum = sumOfDigits(num);
        if (digitSum <= minSum) {
            secondMinSum = minSum;
            minSum = digitSum;
        } else if (digitSum < secondMinSum) {
            secondMinSum = digitSum;
        }
    }
    
    // Case 1: If the array has only one element
    if (n === 1) {
        return Math.min(minSum, minSum * 2);
    }
    
    // Case 2: Apply minimum sum of digits to each element
    let totalSum = minSum * n;
    
    // Case 3: Apply minimum sum of digits to all except the minimum,
    // apply second minimum sum to the minimum element
    for (let i = 0; i < n; i++) {
        totalSum = Math.min(totalSum, (minSum * (n - 1)) + secondMinSum);
    }
    
    return totalSum;
}

// Test cases
console.log(solution([1, 10, 12, 3])); // Output: 8
console.log(solution([2, 29, 3])); // Output: 7
console.log(solution([100, 101, 102, 103])); // Output: 208
console.log(solution([55])); // Output: 1