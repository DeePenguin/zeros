module.exports = function zeros(expression) {
  const parts = expression.split('*');
  let zeroes = 0;
  let fives = 0;
  let isDoubleEven = false

  const powCounter = (number) => {
    let counter = 0;
    let denominator = 0;
    let i = 1;
    do {
      denominator = Math.pow(5, i);
      counter += Math.trunc(number / denominator);
      i++;
    } while (number / denominator >= 1);
    return counter;
  }

  parts.map(part => {
    if (part.includes('!!')) {
      let number = Number(part.slice(0, -2));
      if (number % 2) {
        fives += powCounter(number) - powCounter((number - 1) / 2);
      } else {
        number /= 2;
        zeroes += powCounter(number);
        isDoubleEven = true;
      }

    } else {
      let number = Number(part.slice(0, -1));
      zeroes += powCounter(number);
    }
  })
  zeroes += (zeroes || isDoubleEven) ? fives : 0;
  return zeroes;
}
