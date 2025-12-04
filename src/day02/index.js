import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const createSequence = (start, stop, step) => {
  return (
    Array.from(
      { length: Math.ceil((stop - start) / step) },
      (_, i) => start + i * step,
    )
  )
};


const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  const invalidIds = [];

  // split the input by "," to get an array of ranges. ["11-22", "95-115", "998-1012"]
  const rangesArray = input.split(",");
  // loop through each range
  for (let i=0; i<rangesArray.length; i++) {
    // get the start and end
    const range = rangesArray[i];
    // console.log('range: ',  range)
    const rangeStart = Number(range.split("-")[0]); 
    const rangeEnd = Number(range.split("-")[1]);
  // create an sequence array from the range [11,12,13,14,15,16,17,18,19,20,21,22]
    const idArray = createSequence(rangeStart, rangeEnd+1, 1)
  // loop through each number in the range
    for(let j=0; j<idArray.length; j++) {
      let repeatingId = '';
      // check if it contains an even number of digits
      const id = idArray[j];
      // console.log('id: ', id);
      if(id.toString().length % 2 === 0) {
        // if yes split it in half into two arrays. i.e. [1][1] or for 1010 [10] [10]
        const idSplitArray = id.toString().split("");
        const halfLength = Math.ceil(idSplitArray.length / 2);    
        const leftSide = idSplitArray.slice(0,halfLength);
        const rightSide = idSplitArray.slice(halfLength, idSplitArray.length + 1)
        // for each matching array append it to a matching tracker variable.
        // once it gets to the end of finds a comparison that doesn't match exit the loop
        for(let k=0; k<leftSide.length;k++) {
          if(leftSide[k] == rightSide[k]) {
            repeatingId += leftSide[k];
          } else {
            repeatingId = '';
            break;
          }
        }
      }
      // console.log('repeated id: ',repeatingId)
      // check if the repeatingId is an even number (not sure if I should be doing this)
      // this breaks when the invalid id is 11, 22, or 99 because the repeatingId is 1,2 or 9
      // if(repeatingId.length % 2 === 0) {
        // if there is a invalid id after going through the loop you'll have to duplicate it.
        // since for 11 only 1 would've been added to the matching tracker variable
        const invalidId = repeatingId + repeatingId;
        // add the invalid id to an invalid ids array
        if(Number(invalidId) !== 0) {
          invalidIds.push(Number(invalidId))
        }
      // }
    }
  }
  // console.log(invalidIds);
  // return the sum of the invalid ids.
  if(invalidIds.length > 0) {
    return invalidIds.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  return 0
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
          11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124
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
  onlyTests: false,
});
