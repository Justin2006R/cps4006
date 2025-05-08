function bmiCalculator(){

    var heightValue = document.getElementById("height");
    var weightValue = document.getElementById("weight");
    var resultValue = document.getElementById("result");

    var height = parseFloat(heightValue.value);
    var weight = parseFloat(weightValue.value);

    if (isNaN(height) || isNaN(weight)){
        resultValue.innerHTML = "Enter valid height/weight."
        return;
    }

    var bmi = weight/((height/100) **2);

    var category = "";

    if (bmi < 18.5){
        category = "Underweight";
    } else if (bmi < 25){
        category = "Normal weight";
    } else if (bmi < 30){
        category = "Overweight";
    } else {
        category = "Obese";
    }

    resultValue.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
}