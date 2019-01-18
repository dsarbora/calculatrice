 var add = function(number1, number2) {
return number1 + number2;
};

var subtract = function(number1, number2) {
return number1 - number2;
};

var multiply = function(number1, number2) {
return number1 * number2;
};

var divide = function(number1, number2) {
return number1 / number2;
};


$(function(){
  $("#myForm").submit(function(){
    var numberOne = parseFloat($("#numberOne").val());
    var numberTwo = parseFloat($("#numberTwo").val());
    var operatorType = $("input:radio[name=operatorType]:checked").val();
    if(operatorType == "add"){
      var result = add(numberOne, numberTwo);
    }
    else if(operatorType == "subtract"){
      var result = subtract(numberOne, numberTwo);
    }
    else if(operatorType == "multiply"){
      var result = multiply(numberOne, numberTwo);
    }
    else if(operatorType == "divide"){
      var result = divide(numberOne, numberTwo);
    }
    else{
      alert("You should tell me what to do with these numbers")
    }
    $("#result").text(result).toFixed(2);
    event.preventDefault();
  });

/*$("#subtractForm").submit(function(){
  var numberOne = parseInt($("#numberOne").val());
  var numberTwo = parseInt($("#numberTwo").val());
  var result = subtract(numberOne, numberTwo);
  $("#result").text(result);
  event.preventDefault();
});
*/

/*$("button").click(function(){
  var myNumber = $(this).text().value;
  alert(myNumber);
  $(".display").text($(".display").val()) + myNumber;
});*/

}); //end of document(ready) function


/*
var bmiCalc = function(height, weight) {
  return weight / (height * height);
};
var height = parseFloat(prompt("Enter your height in meters"));
var weight = parseFloat(prompt("Enter your weight in kilograms"));
result = bmiCalc(height, weight);
var outputText = "Your bmi is " + result.toFixed(2) + "."
alert(outputText);

var tempConvert = function(fahrenheit) {
  return ((fahrenheit - 32) * 5/9);
}

var fahrenheit = parseInt(prompt("Enter the temperature in fahrenheit"));
var outputText = "The temperature is " + tempConvert(fahrenheit).toFixed(2) + " celcius.";
alert(outputText);

$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header");
  });

  $("h2").click(function() {
    alert("This is a different header");
  });

  $("h3").click(function() {
    alert("This is a h3 header.");
  });

  $("h4").click(function(){
    alert("This header is small");
  });
});*/
