function telephoneCheck(str) {
  // only matches once in a properly formatted "number"
  const regEx1 = /\(\d\d\d\)/g;
  // can match twice in a properly formatted "number"
  const regEx2 = /\d\d\d-/;
  const regEx3 = /\d{10}/;
  console.log(regEx3.exec(str));
  return true;
}

telephoneCheck("5555555555");