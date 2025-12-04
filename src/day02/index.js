import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);

  // split the input by "," to get an array of ranges. ["11-22", "95-115", "998-1012"]
  // loop through each range
  // get the start and end
  // create an array from the range [11,12,13,14,15,16,17,18,19,20,21,22]
  // loop through each number in the range
  // check if it contains an even number of digits
  // if yes split it in half into two arrays. i.e. [1][1] or for 1010 [10] [10]
  // for each matching array append it to a matching tracker variable.
  // once it gets to the end of finds a comparison that doesn't match exit the loop

  // if there is a invalid id after going through the loop you'll have to duplicate it.
  // since for 11 only 1 would've been added to the matching tracker variable
  
  // add the invalid id to an invalid ids array


  // return the sum of the invalid ids.
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
        // invalid IDs: 11 and 22
        input:`
          11-22
        `,
        expected: 33
      },
      {
        // invalid IDs: 99 
        input:`
          11-22,95-115
        `,
        expected: 132
      },
      {
        // invalid IDs: 1010
        input:`
          998-1012
        `,
        expected: 1010
      },
      // 998
      // 1000
      // 1001
      // 1002
      // 1003
      // 1004
      // 1005
      // 1006
      // 1007
      // 1008
      // 1009
      // 1010
      // if its an even number of digits you can split it in half and compare each index.
      // but what to do if its an odd number of digits?
      // can it ever be an invalid ID if its an odd number of digits?
      // I don't think so. To be repeated twice the number of digits must be even.

      {
        // invalid IDs: 1010
        input:`
          1188511880-1188511890
        `,
        expected: 1188511885
      },
      {
        input:`
          11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
1698522-1698528,446443-446449,38593856-38593862,565653-565659,
824824821-824824827,2121212118-2121212124
        `,
        expected: 1227775554
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
