// Business logic

var test = "hello this is a nice day";

var isVowel = function(letter){
  var vowels = ["a","e","i","o","u","y"];
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
    if (string.charAt(index) === "q" && string.charAt(index+1) === "u") {
      subStr = subStr + string.charAt(index);
      index = index + 1;
    }
    subStr = subStr + string.charAt(index);
    ctr = index;
    }
  subStr = string.slice((ctr+1), string.length) + subStr;
  return subStr;
};

var pigTranslate = function(input){
  if (input.match(/[^a-z]/g) === null) {
    if (input.charAt(0) === 'y') {
      var input = input.slice(1, input.length) + "y";
    }
    if (!isVowel(input.charAt(0))) {
      input = moveCons(input);
    }
    input = input + "ay";
  }

    return input;
};

// alert(pigTranslate(test));

// Front-end logic

$(document).ready(function() {
  $("#pig-form").submit(function(event) {
    event.preventDefault();

    var usrInput = $("#user-text").val();

    $(".results").text(pigTranslate(usrInput));

  });

});
