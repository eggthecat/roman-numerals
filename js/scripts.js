function toRomanSingle(num){
    if (num === 1){
    num = 'I'
  } else if (num === 2 ){
    num = 'II'
  } else if (num === 3){
    num = 'III'
  }  else if (num === 4) {
    num = 'IV'
  } else if (num === 5) {
    num = 'V'
  } else if (num === 6) {
    num = 'VI'
  } else if (num === 7){
    num = 'VII'
  } else if (num === 8) {
    num = 'VIII'
  } else if (num === 9) {
    num = 'IX'
  } else if (num === 10){
    num = 'X'
  } else {
    num = ''
  }
  return num;
}

var romanNumeralArray = []

function toRomanNumeral(num){
  for (var i = num; i !===0; i += 0) {
  if (num > 4000) {
  return "Enter amount smaller than 4000";
  } else if (num === 1,000){
    romanNumeralOutput.push("M");

  } else if (num === 900) {
    romanNumeralOutput.push("CM");
  } else if (num === 500) {
    romanNumeralOutput.push("D");
  } else if  (num === 400){
    romanNumeralOutput.push("CD");
  } else if (num === 100) {
    romanNumeralOutput.push("C");
  } else if (num === 90) {
    romanNumeralOutput.push("XC");
  } else if (num === 50) {
    romanNumeralOutput.push("L");
  }  else if (num === 40) {
    romanNumeralOutput.push("XL");
  } else if (num === 10) {
    romanNumeralOutput.push("X");
  } else if (num === 9) {
    romanNumeralOutput.push("IX");
  } else if (num === 5) {
    romanNumeralOutput.push("V");
  } else if (num === 4){
    romanNumeralOutput.push("IV")
  } else if (num === 1) {
    romanNumeralOutput.push("I")
  } else {
    return
  }
}





// Front-End login //
$(document).ready(function() {
  $("form#roman-numeral").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("input#number").val());
    var result = toRomanSingle(num);
    $("#result").show(result);
    $(".conversion").text(result);

    console.log(result);

  });
});
// var romanNumeralOutput
// }
// }
// //
// }
