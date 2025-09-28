const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianNumbersWithComma(number) {
  const numberWithComma = numberWithCommas(number);
  const persianNumbers = toPersianNumbers(numberWithComma);
  return persianNumbers;
}

export function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function toPersianNumbers(number) {
  return number.toString().replace(/\d/g, (index) => farsiDigits[parseInt(index)]);
}
