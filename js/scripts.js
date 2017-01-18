// Business logic

var test = "idol";

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

var pigTranslate = function(input){
  if (isVowel(input.charAt(0))) {
    input = input + "ay";
  }
    return input;
};

alert(pigTranslate(test));
