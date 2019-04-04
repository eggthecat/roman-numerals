
// business logic
var romanNumeralOutput = [''];
romanNumeralOutput.join(' ');

function toRomanNumeral(num){
  for (var i = num; i != 0; i += 0) {
  // if (i > 4000) {
  // return "Enter amount smaller than 4000";
  if (i >= 1000){
    romanNumeralOutput.push("M");
    var i = (i - 1000);
      var num = i;
  } else if (i >= 900) {
    romanNumeralOutput.push("CM");
    var i = (i - 900);
    var num = i;
  } else if (i >= 500) {
    romanNumeralOutput.push("D");
    var i = (i - 500);
      var num = i;
  } else if  (i >= 400){
    romanNumeralOutput.push("CD");
    var i = (i - 400);
      var num = i;
  } else if (i >= 100) {
    romanNumeralOutput.push("C");
    var i = (i - 100);
      var num = i;
  } else if (i >= 90) {
    romanNumeralOutput.push("XC");
    var i = (i - 90);
      var num = i;
  } else if (i >= 50) {
    romanNumeralOutput.push("L");
    var i = (i - 50);
      var num = i;
  }  else if (i >= 40) {
    romanNumeralOutput.push("XL");
    var i = (i - 40);
      var num = i;
  } else if (i >= 10) {
    romanNumeralOutput.push("X");
    var i = (i - 10);
      var num = i;
  } else if (i >= 9) {
    romanNumeralOutput.push("IX");
    var i = (i - 9);
      var num = i;
  } else if (i >= 5) {
    romanNumeralOutput.push("V");
    var i = (i - 5);
      var num = i;
  } else if (i >= 4){
    romanNumeralOutput.push("IV");
    var i = (i - 4);
      var num = i;
  } else if (i >= 1) {
    romanNumeralOutput.push("I");
    var i = (i - 1);
      var num = i;
  }
}
}

// Front-End login //
$(document).ready(function() {
  $("form#roman-numeral").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("input#number").val());
  toRomanNumeral(num);
  $(".conversion").text(romanNumeralOutput);
  });
});

// function toRomanSingle(num){
//     if (num === 1){
//     num = 'I'
//   } else if (num === 2 ){
//     num = 'II'
//   } else if (num === 3){
//     num = 'III'
//   }  else if (num === 4) {
//     num = 'IV'
//   } else if (num === 5) {
//     num = 'V'
//   } else if (num === 6) {
//     num = 'VI'
//   } else if (num === 7){
//     num = 'VII'
//   } else if (num === 8) {
//     num = 'VIII'
//   } else if (num === 9) {
//     num = 'IX'
//   } else if (num === 10){
//     num = 'X'
//   } else {
//     num = ''
//   }
//   return num;
// }
