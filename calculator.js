//variables from the html elements
let powerButton = document.getElementById("start");
let resetButton = document.getElementById("select");
let button1 = document.getElementById("1");
let button2 = document.getElementById("2");
let button3 = document.getElementById("3");
let button4 = document.getElementById("4");
let button5 = document.getElementById("5");
let button6 = document.getElementById("6");
let button7 = document.getElementById("7");
let button8 = document.getElementById("8");
let button9 = document.getElementById("9");
let button0 = document.getElementById("0");
let buttonCE = document.getElementById("CE");
let buttonC = document.getElementById("C");
let buttonAdd = document.getElementById("+");
let buttonSubtract = document.getElementById("-");
let buttonMultiply = document.getElementById("*");
let buttonDivide = document.getElementById("/");
let buttonEquals = document.getElementById("=");
let buttonPoint = document.getElementById(".");
let buttonNegative = document.getElementById("+/-");
let buttonDelete = document.getElementById("del");
// let topScreenText = document.getElementById("screenTextTop").textContent;
// let bottomScreenText = document.getElementById("screenTextBottom").textContent;

//variables
let powerState = 0;
let batteryLife = 0;
let defaultBottomNumber = 0;
let operatorClicked = false;
let number1 = "";
let number2 = "";
let number3 = "";
let operator;

// creating audio variable
const bootSound = new Audio('sounds/gbstart.mp3');


//creating event listeners for the buttons
powerButton.addEventListener("click", powerButtonClicked);
resetButton.addEventListener("click", resetButtonClicked);
button1.addEventListener("click", button1Clicked);
button2.addEventListener("click", button2Clicked);
button3.addEventListener("click", button3Clicked);
button4.addEventListener("click", button4Clicked);
button5.addEventListener("click", button5Clicked);
button6.addEventListener("click", button6Clicked);
button7.addEventListener("click", button7Clicked);
button8.addEventListener("click", button8Clicked);
button9.addEventListener("click", button9Clicked);
button0.addEventListener("click", button0Clicked);
buttonAdd.addEventListener("click", buttonAddClicked);
buttonSubtract.addEventListener("click", buttonSubtractClicked);
buttonDivide.addEventListener("click", buttonDivideClicked);
buttonMultiply.addEventListener("click", buttonMultiplyClicked);
buttonEquals.addEventListener("click", buttonEqualsClicked);
buttonPoint.addEventListener("click", buttonPointClicked);
buttonNegative.addEventListener("click", buttonNegativeClicked);
buttonCE.addEventListener("click", buttonCEClicked);
buttonC.addEventListener("click", buttonCClicked);
buttonDelete.addEventListener("click", buttonDeleteClicked);

//function that takes an argument for each operator on the calculator
function operatorUsed(operatorButtonPressed)
{   //first if statement doesn't allow an operator to be pressed without a number pressed first
    if (number1 != "")
        
        //switch statement to take the operator button pressed
        //on the calculator and change the operator variable accordingly
        if (number2 == "")
        {
            switch(operatorButtonPressed){
                case "+":
                    operator = "+";
                    break;

                case "-":
                    operator = "-";
                    break;

                case "*":
                    operator = "*";
                    break;

                case "/":
                        operator = "/";
                        break;
            }
            console.log("this is the first section")
            operatorClicked = true;
            document.getElementById("screenTextTop").textContent = number1 + " " + operator + " " + number2;
        } 

        if (number2 != "")
        {
            switch(operatorButtonPressed){
                case "+":
                    operator = "+";
                    break;

                case "-":
                    operator = "-";
                    break;

                case "*":
                    operator = "*";
                    break;

                case "/":
                        operator = "/";
                        break;
            }

            
            console.log("this is the second section")
            number1 = number3;
            number3 = "";
            number2 = "";

            document.getElementById("screenTextTop").textContent = number1 + " " + operator + " " + number2;
            document.getElementById("screenTextBottom").textContent = "";
        
        
    }

    
} 

// function to take the current operator and use the appropriate 
// math function with the two numbers
function operate()
{
    switch(operator)
    {
        case "+":
                number3 = add(number1, number2);
                break;

            case "-":
                number3 = subtract(number1, number2);
                break;

            case "*":
                number3 = multiply(number1, number2);
                break;

            case "/":
                number3 = divide(number1, number2);
                break;
    }

    document.getElementById("screenTextTop").textContent = number1 + " " + operator + " " + number2 + " =";
    document.getElementById("screenTextBottom").textContent = number3;
}

// functions for the buttons when clicked
function button1Clicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("number button 1 pressed")
        
        if (operatorClicked == false)
        {
            number1 += 1;        
            document.getElementById("screenTextBottom").textContent = number1;
        }

        else if (operatorClicked == true)
        {
            number2 += 1;        
            document.getElementById("screenTextBottom").textContent = number2;
        }

    }
}

function button2Clicked()
{
    if (powerState == 1)
    {
            batteryCheck()
            console.log("number button 2 pressed")
            
            if (operatorClicked == false)
            {
                number1 += 2;        
                document.getElementById("screenTextBottom").textContent = number1;
            }

            else if (operatorClicked == true)
            {
                number2 += 2;        
                document.getElementById("screenTextBottom").textContent = number2;
            }
    }
}

function button3Clicked()
{

    if (powerState == 1)
    {
        batteryCheck()
        console.log("number button 3 pressed")
        
        if (operatorClicked == false)
        {
            number1 += 3;        
            document.getElementById("screenTextBottom").textContent = number1;
            
        }

        else if (operatorClicked == true)
        {
            number2 += 3;        
            document.getElementById("screenTextBottom").textContent = number2;
            
        }
    }
}

function button4Clicked()
{

    if (powerState == 1)
    {
        batteryCheck()
        console.log("number button 4 pressed")
        
        if (operatorClicked == false)
        {
            number1 += 4;        
            document.getElementById("screenTextBottom").textContent = number1;            
        }

        else if (operatorClicked == true)
        {
            number2 += 4;        
            document.getElementById("screenTextBottom").textContent = number2;            
        }
    }
    }

function button5Clicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("number button 5 pressed")
        
        if (operatorClicked == false)
        {
            number1 += 5;        
            document.getElementById("screenTextBottom").textContent = number1;
            
        }

        else if (operatorClicked == true)
        {
            number2 += 5;        
            document.getElementById("screenTextBottom").textContent = number2;
            
        }
    }
}

function button6Clicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("number button 6 pressed")
        
        if (operatorClicked == false)
        {
            number1 += 6;        
            document.getElementById("screenTextBottom").textContent = number1;            
        }

        else if (operatorClicked == true)
        {
            number2 += 6;        
            document.getElementById("screenTextBottom").textContent = number2;            
        }
    }
}

function button7Clicked()
{

    if (powerState == 1)
        {
        batteryCheck()
        console.log("number button 7 pressed")
        
        if (operatorClicked == false)
        {
            number1 += 7;        
            document.getElementById("screenTextBottom").textContent = number1;            
        }

        else if (operatorClicked == true)
        {
            number2 += 7;        
            document.getElementById("screenTextBottom").textContent = number2;            
        }
    }
}

function button8Clicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("number button 8 pressed")
        
        if (operatorClicked == false)
        {
            number1 += 8;        
            document.getElementById("screenTextBottom").textContent = number1;            
        }

        else if (operatorClicked == true)
        {
            number2 += 8;        
            document.getElementById("screenTextBottom").textContent = number2;            
        }
    }

}

function button9Clicked()
{

    if (powerState == 1)
    {
        batteryCheck()
        console.log("number button 9 pressed")
        
        if (operatorClicked == false)
        {
            number1 += 9;        
            document.getElementById("screenTextBottom").textContent = number1;            
        }

        else if (operatorClicked == true)
        {
            number2 += 9;        
            document.getElementById("screenTextBottom").textContent = number2;            
        }
    }
}

function button0Clicked()
{   
        if (powerState == 1)
        {
            batteryCheck()
            console.log("number button 0 pressed")
            
            if (operatorClicked == false)
            {
                number1 += 0;        
                document.getElementById("screenTextBottom").textContent = number1;            
            }

            else if (operatorClicked == true)
            {
                number2 += 0;        
                document.getElementById("screenTextBottom").textContent = number2;            
            }
        }
}

function buttonAddClicked()
{

    if (powerState == 1)
    {
        batteryCheck()
        console.log("Add button pressed")
        operatorUsed("+")
        console.log(operator)
    }
}

function buttonSubtractClicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("Subtract button pressed")
        operatorUsed("-")
        console.log(operator)
    }
}

function buttonMultiplyClicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("multiply button pressed")
        operatorUsed("*")
        console.log(operator)
    }
}

function buttonDivideClicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("Divide button pressed")
        operatorUsed("/")
        console.log(operator)
    }
}

function buttonEqualsClicked()
{

        if(number2 == 0 && operator == "/")
        {
            document.getElementById("screenTextTop").textContent = "Divided by zero";
            document.getElementById("screenTextBottom").textContent = "Game Over";
            number1 = "";
            number2 = ""
            number3 = "";
            operatorClicked = false;
        }

        else if(number2 != "")
        {
            batteryCheck()
            operate()
            // number1 = "";
            //number2 = "";
            // operatorClicked = false;
        
        }
}

function buttonPointClicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("Point button pressed")

        if (operatorClicked == false)
        {   //checks to see if a decimal has been added, and if not, adds one
            if (number1.includes(".") != true)
            {
                number1 += ".";        
                document.getElementById("screenTextBottom").textContent = number1;                
            }
        }

        else if (operatorClicked == true)
        {
            if (number2.includes(".") != true)
            {
                number2 += ".";        
                document.getElementById("screenTextBottom").textContent = number2;
                
            }            
        }
    }
}

function buttonNegativeClicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("Negative button pressed")
        let negative = "-";

        if (operatorClicked == false)
        {   
            

            if (number1.includes("-") != true)
            {
                
                number1 = negative += number1;
                document.getElementById('screenTextBottom').textContent = number1;
            }

            else if (number1.includes("-") == true)
            {
                number1 = number1.substring(1);
                document.getElementById('screenTextBottom').textContent = number1;
            }
            
        }

        else if (operatorClicked == true)
        {
            if (number2.includes("-") != true)
            {
                
                number2 = negative += number2;
                document.getElementById('screenTextBottom').textContent = number2;
            }

            else if (number2.includes("-") == true)
            {
                number2 = number2.substring(1);
                document.getElementById('screenTextBottom').textContent = number2;
            }       
        }
        
    }
}

function buttonCClicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("Clear button pressed")
        number1 = "";
        number2 = "";
        number3 = 0;
        operatorClicked = false;
        document.getElementById('screenTextTop').textContent = "";
        document.getElementById('screenTextBottom').textContent = number3;
    }
}

function buttonCEClicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("Clear Entry button pressed")

        if (operatorClicked == false)
        {   
            number1 = "";
            document.getElementById('screenTextBottom').textContent = 0;
        }

        else if (operatorClicked == true)
        {
           number2 = "";
           document.getElementById('screenTextBottom').textContent = 0;           
        }
    }
}

function buttonDeleteClicked()
{
    if (powerState == 1)
    {
        if (operatorClicked == false)
        {
            number1 = number1.slice(0, -1);        
            document.getElementById("screenTextBottom").textContent = number1;
        }

        else if (operatorClicked == true)
        {
            number2 = number2.slice(0, -1);        
            document.getElementById("screenTextBottom").textContent = number2;
        }

        batteryCheck()
        console.log("Delete button pressed")
    }
}

//function that checks the battery life and then changes the battery light
function batteryCheck()
{
    batteryLife = batteryLife + 1;

    if (batteryLife > 15)
    {
        document.getElementById('batteryLight').style.backgroundColor = "red";
        console.log("battery low")
    }

    else
    {
        document.getElementById('batteryLight').style.backgroundColor = "green";
    }
}

//function for when the power button is clicked
function powerButtonClicked()
{    
    // if statement checking if the power state is off and playing the boot screen 
    // and soud for the calculator if it is off
    if (powerState == 0)
    {
        batteryCheck()
        bootSound.pause();
        bootSound.currentTime = 0;
        bootSound.play();
        console.log("power on");

        
        document.getElementById('screenTextTop').textContent = "Kastlegate";
        setTimeout(() => {  document.getElementById('screenTextTop').textContent = ""; }, 2000);
        setTimeout(() => {  document.getElementById("screenTextBottom").textContent = defaultBottomNumber; }, 2000);
        
        powerState = 1;
    }

    // if statement checking if the power state is off and playing the boot screen 
    // and sound for the calculator if it is off
    else if (powerState == 1)
    {
        document.getElementById('batteryLight').style.backgroundColor = "rgb(165, 164, 164)";
        powerState = 0;
        number1 = "";
        number2 = "";
        number3 = 0;
        operatorClicked = false;
        document.getElementById('screenTextTop').textContent = "";
        document.getElementById('screenTextBottom').textContent = "";
        console.log("power off");
    }
}

//function for the reset button being clicked
function resetButtonClicked()
{
        document.getElementById('batteryLight').style.backgroundColor = "rgb(165, 164, 164)";
        powerState = 0;
        document.getElementById('screenTextTop').textContent = "";
        document.getElementById('screenTextBottom').textContent = "";
        batteryLife = 0;
        number1 = "";
        number2 = "";
        number3 = 0;
        operatorClicked = false;
        console.log("calculator reset");
}


function add(number1, number2)
{
    return parseFloat(number1) + parseFloat(number2);
}

function subtract(number1, number2)
{
    return number1 - number2;
}

function multiply(number1, number2)
{
    return number1 * number2;
}

function divide(number1, number2)
{
    return number1 / number2;
}

