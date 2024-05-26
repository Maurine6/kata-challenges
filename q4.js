
// question 4 of kata challenge.

function solution(A) {
    // Create a map to store doctor IDs and the number of unique hospitals they work at.
    const doctorHospitals = new Map();
  
    // Iterate through each day.
    for (let day = 0; day < A[0].length; day++) {
      // Iterate through each hospital.
      for (let hospital = 0; hospital < A.length; hospital++) {
        const doctorId = A[hospital][day];
  
        // Check if doctor is already in the map.
        if (doctorHospitals.has(doctorId)) {
          const currentHospitals = doctorHospitals.get(doctorId);
          // Only increment the count if the doctor is assigned to a new hospital.
          if (!A.some(row => row[hospital] === doctorId)) {
            doctorHospitals.set(doctorId, currentHospitals + 1);
          }
        } else {
          // Add doctor to the map with initial hospital count of 1.
          doctorHospitals.set(doctorId, 1);
        }
      }
    }
  
    // Count the number of doctors who have worked at more than one hospital across any day.
    let multiHospitalDoctors = 0;
    for (const [id, count] of doctorHospitals.entries()) {
      if (count > 1) {
        multiHospitalDoctors++;
      }
    }
  
    // Return the total count of doctors working at multiple hospitals.
    return multiHospitalDoctors;
  }
  console.log(solution([ [1, 1, 5, 2, 3], [4, 5, 6, 4, 3], [9, 4, 4, 1, 5] ]));
  console.log(solution([ [4, 3], [5, 5], [6, 2] ]))
  console.log(solution([ [1, 2, 2], [3, 1, 4] ]))

  // test cases
  // A = [ [1, 1, 5, 2, 3], [4, 5, 6, 4, 3], [9, 4, 4, 1, 5] ] returns 4
  // A = [ [4, 3], [5, 5], [6, 2] ] returns 0
  // A = [ [1, 2, 2], [3, 1, 4] ] returns 1