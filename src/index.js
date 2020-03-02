module.exports = function toReadable (number) {
  if (number === 0) {
    return "zero";
  }
  let strNumber = "";
  let numberArray1_19 = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  let numberArray20 = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
let num = Math.trunc(number/100);
if (num > 0) {
  strNumber = strNumber + numberArray1_19[num] + " hundred";
  number = number%100;
}
num = Math.trunc(number/10);
if (num < 2) {
strNumber = strNumber +" "+ numberArray1_19[number];
} else {
strNumber = strNumber +" "+ numberArray20[num] +" "+numberArray1_19[(number%10)];
}
  return strNumber;
}
