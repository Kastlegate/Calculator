//variables 
let powerButton = document.getElementById("start");
let powerState = 0;

// creating audio variables
const bootSound = new Audio('sounds/gbstart.mp3');


//creating event listerners for the buttons
powerButton.addEventListener("click", powerButtonClicked);

function powerButtonClicked()
{
    
    // if statement checking if the power state is off and playing the boot screen 
    // and soud for the calculator if it is off
    if (powerState == 0)
    {
        document.getElementById('batteryLight').style.backgroundColor = "green";
        bootSound.pause();
        bootSound.currentTime = 0;
        bootSound.play();
        console.log("power on");
        
        document.getElementById('screenTextTop').textContent = "Kastlegate";
        setTimeout(() => {  document.getElementById('screenTextTop').textContent = ""; }, 2000);
        setTimeout(() => {  document.getElementById('screenTextBottom').textContent = "0"; }, 2000);
        
        powerState = 1;
    }

    // if statement checking if the power state is off and playing the boot screen 
    // and soud for the calculator if it is off
    else if (powerState == 1)
    {
        document.getElementById('batteryLight').style.backgroundColor = "rgb(165, 164, 164)";
        powerState = 0;
        document.getElementById('screenTextTop').textContent = "";
        document.getElementById('screenTextBottom').textContent = "";
        console.log("power off");
    }


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