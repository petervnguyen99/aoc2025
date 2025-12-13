import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);

  return;
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
  onlyTests: true,
});
