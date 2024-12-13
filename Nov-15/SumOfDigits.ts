function sumOfDigitsInNumber(num: number): number {
    // Convert the number to a positive value and convert it to a string to easily access each digit
    const absoluteValue = Math.abs(num).toString();
  
    // Sum the digits
    let totalSum = 0;
    for (const digit of absoluteValue) {
      totalSum += parseInt(digit, 10);
    }
  
    return totalSum;
  }
  
  const inputa = 1234;
  console.log(sumOfDigitsInNumber(inputa)); // Should return 10
  
  const inputb = -456;
  console.log(sumOfDigitsInNumber(inputb)); // Should return 15
  