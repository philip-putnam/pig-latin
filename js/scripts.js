// Business logic

var test = "standard";

var isVowel = function(letter){
  var vowels = ["a","e","i","o","u"];
  var vowelTrue = false;
  vowels.forEach(function(vowel) {
    if (letter === vowel) {
      vowelTrue = true;
    }
  });
  return vowelTrue;
};

var moveCons = function(string) {
  var subStr = "";
  var ctr;
  for (var index = 0; !isVowel(string.charAt(index)); index += 1) {
      subStr = subStr + string.charAt(index);
      ctr = index;
    }
  subStr = string.slice((ctr+1), string.length) + subStr;
  return subStr;
};

var pigTranslate = function(input){
  if (input.match(/[^a-z]/g) === null) {
    if (!isVowel(input.charAt(0))) {
      input = moveCons(input);
    }
    input = input + "ay";
  }

    return input;
};

alert(pigTranslate(test));
