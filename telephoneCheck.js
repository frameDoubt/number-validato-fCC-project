function telephoneCheck(str) {
  const formattedStr = str.replace(/\s/g, '');
// only matches once in a properly formatted "number"
const regEx1 = /\(\d\d\d\)/;
// can match twice in a properly formatted "number"
const regEx2 = /\d\d\d-/;
// can match once in a properly formatted "number"
// tests for 10 digits repeated
const regEx3 = /\d{10}/;
// checks for 4 repeating digits
const regEx4 = /\d{4}/;
if (regEx3.test(formattedStr) || /1\d{10}/.formattedStr) {
  console.log(formattedStr);
  return true;
};
if (formattedStr[0] === '1' && (formattedStr.length >= 11 && formattedStr.length <= 14)) {
  if (regEx1.test(formattedStr) && regEx2.test(formattedStr)) {
    return true;
  }
  if (/(\d{3}-){2}/.test(formattedStr) && formattedStr.length <= 13) {
    return true;
  }
}
if (regEx1.test(formattedStr) && regEx2.test(formattedStr)) {

}
return false;
}

console.log(telephoneCheck("1(555)555-5555"));