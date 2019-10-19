function sortNumbers(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function sumTwoSmallestNumbers(numbers) {
    numbers.sort(sortNumbers);
    return numbers[0] + numbers[1];
} 