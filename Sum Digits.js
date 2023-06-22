function demo(number) {

  let inputAsString = number.toString();
  let sum = 0;

  for (let i = 0; i < inputAsString.length; i++) {
    let currentDigit = Number(inputAsString[i]);

    sum += currentDigit;
  }

  console.log(sum)
}
demo(245678);