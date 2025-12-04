import run from "aocrunner";

const parseInput = (rawInput) => rawInput;


const part1 = (rawInput) => {
  const input = parseInput(rawInput).split('\n').reverse();
  let startNum = 50;
    let zeroCounter = 0;

    const checkStartNumRight = (number) => {
    if(number > 99) {
      const remainder = number - 99;
      return remainder -1
    }

    return number;
    }
    const checkStartNumLeft = (number) => {
    if(number < 0) {
      const remainder = Math.abs(number);
      return 99 - (remainder - 1);
    } 
    return number;
    }


  do {
    const rotation = input.pop();
    const direction = rotation[0];
    const clicks = Number(rotation.slice(1));

    if(direction == 'R') {
      if(clicks >= 100) {
        const clicksRemainder = clicks % 100;
        startNum = checkStartNumRight(startNum + clicksRemainder);
      } else {
        startNum = checkStartNumRight(startNum + clicks);
      }
    } else if(direction == 'L') {
      if(clicks >= 100) {
        const clicksRemainder = clicks % 100;
        startNum = checkStartNumLeft(startNum - clicksRemainder);
      } else {
        startNum = checkStartNumLeft(startNum - clicks);
      }
    }
    if(startNum === 0) {
      zeroCounter += 1;
    }
  } while (input.length > 0);

  return zeroCounter;
};


const part2 = (rawInput) => {
  const input = parseInput(rawInput).split('\n').reverse();
  let startNum = 50;
  let zeroCounterPart2 = 0

  const checkStartNumRightPart2 = (number) => {
    if(number > 99) {
      const remainder = number - 99;
      if((remainder - 1) !== 0) {
        zeroCounterPart2 += 1;
      }
      return remainder - 1
    }
    return number;
  }
  const checkStartNumLeftPart2 = (number, checkNum) => {
    if(number < 0) {
      const remainder = Math.abs(number);
      if((100 - remainder) !== 0 && checkNum !== 0) {
        zeroCounterPart2 += 1
      }
      return 100 - remainder;
    } 
    return number;
  }

  do {
    const rotation = input.pop();
    const direction = rotation[0];
    const clicks = Number(rotation.slice(1));

    if(direction == 'R') {
      if(clicks >= 100) {
        const visitedZero = clicks / 100;
        zeroCounterPart2 += Math.floor(visitedZero)
        const clicksRemainder = clicks % 100;
        startNum = checkStartNumRightPart2(startNum + clicksRemainder);
      } else {
        startNum = checkStartNumRightPart2(startNum + clicks);
      }
    } else if(direction == 'L') {
      if(clicks >= 100) {
        const visitedZero = clicks / 100;
        zeroCounterPart2 += Math.floor(visitedZero)
        const clicksRemainder = clicks % 100;
        startNum = checkStartNumLeftPart2(startNum - clicksRemainder, startNum);
      } else {
        startNum = checkStartNumLeftPart2(startNum - clicks, startNum);
      }
    }
    if(startNum === 0 && clicks < 100) {
      zeroCounterPart2 += 1;
    }
  } while (input.length > 0);

  return zeroCounterPart2;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
      {
        input:`
          L68
          L30
          R48
          L5
          R60
          L55
          L1
          L99
          R14
          L82
        `,
        expected: 3
      }
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
      {
        input:`
          L68
          L30
          R48
          L5
          R60
          L55
          L1
          L99
          R14
          L82
        `,
        expected: 6
      },
      {
        input:`
        L50
        R500
        `,
        expected: 6
      },
      {
        input:`
        R50
        L500
        `,
        expected: 6
      },
      {
        input:`
          R50
          L1
        `,
        expected: 1
      },
      {
        input:`
          L50
          R1
        `,
        expected: 1
      },
      {
        input:`
        L50
        R143
        `,
        expected: 2
      },
      {
        input:`
        L50
        L200
        `,
        expected: 3
      },
      {
        input:`
        R50
        R200
        `,
        expected: 3
      },
      {
        input:`
        R49
        R1
        `,
        expected: 1
      },
      {
        input:`
        L49
        L1
        `,
        expected: 1
      },
      {
        input:`
        L50
        L950
        L50
        `,
        expected: 11
      },
      {
        input:`
        L50
        R1
        `,
        expected: 1
      },
      {
        input:`
        R1000
        L1000
        L50
        R1
        L1
        L1
        R1
        R100
        R1
        `,
        expected: 24
      },
      {
        input:`
          L50
          R101
        `,
        expected: 2
      },
      {
        input:`
          R49
          L98
        `,
        expected: 0
      },
      {
        input:`
          R49
          R1
        `,
        expected: 1
      },
      {
        input:`
          L50
          R400
        `,
        expected: 5
      },
      {
        input:`
        R1000
        `,
        expected: 10
      },
      {
        input:`
        L50
        `,
        expected: 1
      }
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests:  false,
});
