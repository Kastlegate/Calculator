//variables 
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
let buttonPlus = document.getElementById("+");
let buttonMinus = document.getElementById("-");
let buttonMultiply = document.getElementById("*");
let buttonDivide = document.getElementById("/");
let buttonEquals = document.getElementById("=");
let buttonPoint = document.getElementById(".");
let buttonNegative = document.getElementById("+/-");
let buttonDelete = document.getElementById("del");

let powerState = 0;
let batteryLife = 0;
let number1 = 0;
let number2 = 0;
let number3 = 0;

// creating audio variable
const bootSound = new Audio('sounds/gbstart.mp3');


//creating event listerners for the buttons
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
buttonPlus.addEventListener("click", buttonPlusClicked);
buttonMinus.addEventListener("click", buttonMinusClicked);
buttonDivide.addEventListener("click", buttonDivideClicked);
buttonMultiply.addEventListener("click", buttonMultiplyClicked);
buttonEquals.addEventListener("click", buttonEqualsClicked);
buttonPoint.addEventListener("click", buttonPointClicked);
buttonNegative.addEventListener("click", buttonNegativeClicked);
buttonCE.addEventListener("click", buttonCEClicked);
buttonC.addEventListener("click", buttonCClicked);
buttonDelete.addEventListener("click", buttonDeleteClicked);

function button1Clicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("number button 1 pressed")
        number1 = 1;
        if(number3 == 0)
        {
            number3 = number1;
        } 
        else 
        {
            number3 = "" + number3 + number1;
        }  
        
        console.log(number3 + number1)
        document.getElementById('screenTextBottom').textContent = number3;
    }
}

function button2Clicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("number button 2 pressed")
    }
}

function button3Clicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("number button 3 pressed")
    }
}

function button4Clicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("number button 4 pressed")
    }
}

function button5Clicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("number button 5 pressed")
    }
}

function button6Clicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("number button 6 pressed")
    }
}

function button7Clicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("number button 7 pressed")
    }
}

function button8Clicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("number button 8 pressed")
    }
}

function button9Clicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("number button 9 pressed")
    }
}

function button0Clicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("number button 0 pressed")
    }
}

function buttonPlusClicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("Plus button pressed")
    }
}

function buttonMinusClicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("minus button pressed")
    }
}

function buttonMultiplyClicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("multiply button pressed")
    }
}

function buttonDivideClicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("Divide button pressed")
    }
}

function buttonEqualsClicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("Equals button pressed")
    }
}

function buttonPointClicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("Point button pressed")
    }
}

function buttonNegativeClicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("Negative button pressed")
    }
}

function buttonCClicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("Clear button pressed")
    }
}

function buttonCEClicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("Clear Entry button pressed")
    }
}

function buttonDeleteClicked()
{
    if (powerState == 1)
    {
        batteryCheck()
        console.log("Delete button pressed")
    }
}

//function that checks the battery life and then changes the battery light
function batteryCheck()
{
    batteryLife = batteryLife + 1;

    if (batteryLife > 9)
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
        setTimeout(() => {  document.getElementById('screenTextBottom').textContent = number3; }, 2000);
        
        powerState = 1;
    }

    // if statement checking if the power state is off and playing the boot screen 
    // and sound for the calculator if it is off
    else if (powerState == 1)
    {
        document.getElementById('batteryLight').style.backgroundColor = "rgb(165, 164, 164)";
        powerState = 0;
        number3 = 0;
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
        number3 = 0;
        console.log("calculator reset");
}


function add(number1, number2)
{
    return number1 + number2;
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

console.log(add(30,2))
console.log(subtract(1000,2))
console.log(multiply(123456789,2))
console.log(divide(30,2))