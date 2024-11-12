function romanToInt(roman: string): number {
    // these are value to be converted from the string
    const romanMap: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0; //roman number is addition and substraction of the strings

    for (let i = 0; i < roman.length; i++) {
        const currentVal = romanMap[roman[i]];
        if (i + 1 < roman.length) {
            const nextVal = romanMap[roman[i + 1]];
            if (currentVal < nextVal) {
                total -= currentVal;
            } else {
                total += currentVal;
            }
        } else {
            total += currentVal;
        }
    }

    return total;
}

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("IX")); // 9
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
