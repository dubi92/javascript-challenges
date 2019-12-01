const inputs = [
    71343,
    60747,
    122054,
    67364,
    53017,
    81716,
    55910,
    120565,
    59809,
    148941,
    124539,
    108258,
    77377,
    97572,
    56164,
    57858,
    97899,
    53786,
    129974,
    88645,
    89330,
    136628,
    139228,
    128560,
    88358,
    85431,
    68350,
    61458,
    61833,
    104279,
    127850,
    111139,
    94752,
    95037,
    141723,
    96355,
    89433,
    78355,
    108635,
    59567,
    55589,
    141992,
    104238,
    68291,
    147546,
    73476,
    70991,
    62313,
    58672,
    121783,
    63158,
    112817,
    117776,
    134302,
    107446,
    124540,
    84279,
    51193,
    78829,
    142544,
    102528,
    131341,
    121502,
    78165,
    127783,
    81012,
    106876,
    90403,
    62091,
    58090,
    74824,
    109657,
    55042,
    108119,
    56850,
    69635,
    107792,
    131462,
    106842,
    83864,
    127170,
    88563,
    138150,
    117904,
    75996,
    78850,
    76719,
    133639,
    55213,
    111209,
    126243,
    123495,
    89420,
    54618,
    110194,
    79674,
    109834,
    77521,
    110024,
    115217,
];

const part1Solution = () => {
    let requiredFuel = 0;
    inputs.forEach(mass => {
        requiredFuel += Math.floor(mass / 3) - 2;
    });
    return requiredFuel;
};

const part2Solution = () => {
    const calcRequiredFuel = (mass) => {
        let requiredFuel = Math.floor(mass / 3) - 2;
        if (requiredFuel <= 0) {
            return 0;
        }
        requiredFuel += calcRequiredFuel(requiredFuel);
        return requiredFuel;
    };

    let fullRequiredFuel = 0;
    inputs.forEach(mass => {
        fullRequiredFuel += calcRequiredFuel(mass);
    });
    return fullRequiredFuel;
};
console.log(part1Solution());
console.log(part2Solution());
