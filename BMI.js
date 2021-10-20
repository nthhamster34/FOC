function BMI(){
		var w=document.getElementById('w').value;
		var h=document.getElementById('h').value;
		var bmi=w/(h/100*h/100);
		document.getElementById("result").innerHTML="Your BMI is" +  bmi;
if (bmi < 18.5){
        document.getElementById("result").innerHTML="Your BMI is" +  bmi + "&nbspYOU ARE UNDERWEIGHT.";
        
    }
    else if (bmi >=18.5 && bmi <25){
        document.getElementById("result").innerHTML="Your BMI is" + bmi +"&nbspYOU HAVE A HEALTHY WEIGHT.";
      
    }
    else if (bmi >=25 && bmi <30){
       document.getElementById("result").innerHTML="Your BMI is " +  bmi +"&nbspYOU ARE OVERWEIGHT.";
        
    }
    else if (bmi >= 30){
        document.getElementById("result").innerHTML="Your BMI is " + bmi + "&nbsp YOU ARE OBESE.";
        
    }
else {
alert ("Kindly, ensure everything is filled out and matches required measurement units properly.")
}
		}