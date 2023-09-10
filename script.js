document.getElementById("bmiform").addEventListener("submit", function(e) {
    e.preventDefault();
    var gender = document.getElementById("gender").value;
    var age = parseInt(document.getElementById("age").value);
    var heightFeet = parseInt(document.getElementById("height-feet").value);
    var heightInch = parseInt(document.getElementById("height-inches").value);
    var weight = parseFloat(document.getElementById("weight").value);
    
    var height = ((heightFeet * 12) + heightInch) * 0.0254;
    var bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    var bmiResult = document.getElementById("result");

    let bmiCategory = "";

    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    }else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = "Normal Weight";
    }else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory = "Overweight";
    }else if (bmi >= 30) {
        bmiCategory = "Obese";
    }

    let result = `Your BMI is ${bmi} and you are ${bmiCategory}`;
    bmiResult.innerHTML = result;
});