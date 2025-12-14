import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  const largestJoltages = [];

  const banks = input.split('\n');
  
  for(let i=0; i<banks.length; i++) {
    const currentBank = banks[i];
    // the last number can never be the first digit since we have to choose exactly two.
    // so we could just split it off then find the largest number.
    const currentBankArr = currentBank.split('')
    const lastBattery = currentBankArr.pop();
    const firstLargestBattery = Math.max(...currentBankArr).toString();
    // once we get that 1st largest number we can then remove everything from the left of it.
    // including that largest number
    const reducedBankArr = currentBankArr.slice(currentBankArr.indexOf(firstLargestBattery) + 1)

    // put the last number back and then find the second largest number.
    reducedBankArr.push(lastBattery);
    const secondLargestBattery = Math.max(...reducedBankArr).toString();

    // Combine the numbers and add it to a array of largest joltages.
    largestJoltages.push(Number(firstLargestBattery + secondLargestBattery));
  }

  // return the sum of that array.
  return largestJoltages.reduce((accumulator, currentValue) => accumulator + currentValue);
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  return;
};

run({
  part1: {
    tests: [
      {
        input:`
          987654321111111
        `,
        expected: 98
      },
      {
        input:`
          811111111111119
        `,
        expected: 89
      },
      {
        input:`
          234234234234278
        `,
        expected: 78
      },
      {
        input:`
          818181911112111
        `,
        expected: 92
      },
      {
        input:`
          987654321111111
          811111111111119
          234234234234278
          818181911112111
        `,
        expected: 357
      },


    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
