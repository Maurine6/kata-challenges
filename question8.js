// question 8.

function solution(A, B) {
    // Converts a time string in "HH:MM" format to the total number of minutes since midnight.
    function timeToMinutes(t) {
        const [hh, mm] = t.split(':').map(Number);
        return hh * 60 + mm;
    }

    // Calculates the number of full 15-minute intervals between a given start and end time in minutes.
    function countFullRounds(start, end) {
        if (start % 15!== 0) {
            start += 15 - (start % 15);
        }
        if (start >= end) {
            return 0;
        }
        return Math.floor((end - start) / 15);
    }

    // Start time to midnight (1440 minutes).
    const startTime = timeToMinutes(A);
    const endTime = timeToMinutes(B);

    if (startTime <= endTime) {
        return countFullRounds(startTime, endTime);
    } else {
        return countFullRounds(startTime, 1440) + countFullRounds(0, endTime);
    }
}

// Example usage
console.log(solution("12:03", "12:03")); // Should return 0
console.log(solution("00:00", "23:59")); // Should return 95
console.log(solution("12:01", "12:44")); // Should return 1
console.log(solution("20:00", "06:00")); // Should return 40
