module.exports = function toReadable (number) {
  const words = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
  }
  if (number === 0) {
    return "zero";
  }
  let readableNum = "";
  let hundreds = number % 1000;
  let tens = hundreds % 100;
  let tmp = "";
  if (tens > 19) {
    let tenTen = Math.floor(tens / 10) * 10;
    let tenOne = tens % 10;
    readableNum = words[tenTen] + " " + words[tenOne] + " " + readableNum;
  } else {
    readableNum = words[tens] + " " + readableNum;
  }
  if (hundreds > 99) {
    let hundredsHundred = Math.floor(hundreds / 100);
    readableNum = words[hundredsHundred] + " hundred " + readableNum;
  }

  return readableNum.trim();
}
