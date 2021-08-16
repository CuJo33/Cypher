function enDecode() {
  let userInput = document.getElementById("userMessage").value;
  let decode = document.getElementById("decode");
  let cleanedString = userInput.trim().toLowerCase();
  let outputMessage = [];
  let userKey = document.getElementById("key").value;
  let superFun = document.getElementById("superFunHappyMode").checked;
  let flag = true;

  // set the flag to be the direction of parsing
  // if flag is true then we encode
  // if flag is false we decode
  // check to see if decode is checked and thus set to be false
  if (decode.checked) {
    flag = false;
  }

  // wrap this in an if for the superfunhappymode
  if (superFun == true) {
    for (let i = 0; i < cleanedString.length; i++) {
      newKey = convertLetterToIndex(cleanedString[i]);
      console.log("userkey in superfun loop " + newKey);
      outputMessage.push(
        cipherLetter(cleanedString[i], flag, newKey, superFun)
      );
    }
  } else {
    for (let i = 0; i < cleanedString.length; i++) {
      outputMessage.push(
        cipherLetter(cleanedString[i], flag, userKey, superFun)
      );
    }
  }
  document.getElementById("output").value = outputMessage.join("");
}

function convertLetterToIndex(letter) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let index = alphabet.indexOf(letter);
  return index;
}
function convertIndexToLetter(index) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let letter = alphabet[index];
  return letter;
}

function cipherLetter(letter, flag, userKey, superFun) {
  let RegEx = /[^a-z]/;

  if (RegEx.test(letter)) {
    return letter;
  } else {
    let newIndex = calculateNewIndex(letter, flag, userKey, superFun);
    let newLetter = convertIndexToLetter(newIndex);
    return newLetter;
  }
}

function calculateNewIndex(letter, flag, userKey, superFun) {
  let index = Number(convertLetterToIndex(letter));
  if (flag) {
    index = index + Number(userKey);
  } else if (superFun) {
    index = Number(userKey) / 2;
  } else {
    index = index - Number(userKey);
  }

  if (index > 25) {
    index = index - 26;
  } else if (index < 0) {
    index = index + 26;
  }
  return index;
}

function setSuperFun() {
  document.getElementById("superFunHappyMode").checked = false;
}
