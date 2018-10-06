/********************************

        COOKIE clicker

********************************/

//declare default variables
let cookieCount = 499;
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;
//declare DOM  variables
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');
let buyClickPower = document.getElementById('buy-click-power')
let clickPowerPrice = document.getElementById('click-power-price')
let clickPowerLevel = document.getElementById('click-power-level')
let clickPowerMultiple = document.getElementById('click-power-multiple')

//everytime a user clicks the button, their cookies are increased by the value of their clickPower.
cookieClicker.addEventListener("click", function() {
    cookieCount = cookieCount + clickPower;
    refreshCookieCount()
})

/********************************

        Click Power

********************************/


//Buy click power
buyClickPower.addEventListener("click", function() {
    if (cookieCount >= clickPowerPriceAmount) {
        // logs a success message
        console.log("Item Succesfully Bought");
        //subtract cookies from the price of the item
        cookieCount -= clickPowerPriceAmount;
        //update cookie cookieCounter
        refreshCookieCount()

        // upgrade power level
        clickPowerLevelNumber += 1;

        // update click price
        clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);

        // update click power
        clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05);

        // refresh shop item
        refreshPowerClick();
    } else {
        console.log("You don't have enough cookies!");
    }
})

let refreshCookieCount = function() {
    cookieCounter.innerHTML = cookieCount;
}

let refreshPowerClick = function() {
    clickPowerLevel.innerHTML = clickPowerLevelNumber;
    clickPowerPrice.innerHTML = clickPowerPriceAmount;
    clickPowerMultiple.innerHTML = clickPower;
}

/********************************

          Grandmas

********************************/
//set default values
let grandmaAuto = false;
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;

//declare DOM variables
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');

//buy a grandma
buyGrandma.addEventListener("click", function()
{
    // make sure we have enough cookies and subtract our cookies from the price
    if(cookieCount >= grandmaPriceAmount)
    {
        cookieCount -= grandmaPriceAmount;
        refreshCookieCount();
    //upgrade power level
        grandmaLevelNumber += 1;
    //update price
        grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);
    //turn autoGrandma on!
        autoGrandma = true;
        autoGrandmaStart();
    //refresh shop item
    //updated grandma power
        grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33);
        refreshGrandma();
    }

    //refresh shop item

})

let refreshGrandma = function()
{
    grandmaLevel.innerHTML = grandmaLevelNumber;
    grandmaPrice.innerHTML = grandmaPriceAmount;
    grandmaMultiple.innerHTML = grandmaPower - 10;
    console.log("Producing: " + grandmaPower + " cookies per second!");
}

let autoGrandmaStart = function()
{
    let grandmaInt = window.setInterval(function()
    {
        cookieCount += grandmaPower;
        refreshCookieCount();
    }, 1000);
}

/********************************

        Grandma Steroids

********************************/
//set default values
let steroidPower = 1;
let steroidPriceAmount = 10;
let steroidLevelNumber = 0;

//declare DOM variables
let buySteroid = document.getElementById('buy-steroid');
let steroidPrice = document.getElementById('steroid-price');
let steroidLevel = document.getElementById('steroid-level');
let steroidMultiple = document.getElementById('steroid-multiple');

//buy a steroid
buySteroid.addEventListener("click", function()
{
    // make sure we have enough cookies and subtract our cookies from the price
    if(cookieCount >= steroidPriceAmount)
    {
        cookieCount -= steroidPriceAmount;
        refreshCookieCount();
    //upgrade power level
        steroidLevelNumber += 1;
    //update price
        steroidPriceAmount = Math.floor(steroidPriceAmount * 1.33);
    //refresh shop item
    //updated steroid power
        steroidPower += 1;
        grandmaPower = Math.floor(grandmaPower * steroidMultiplier)
        refreshSteroid();
    }

    //refresh shop item

})

let refreshSteroid = function()
{
    steroidLevel.innerHTML = steroidLevelNumber;
    steroidPrice.innerHTML = steroidPriceAmount;
    steroidMultiple.innerHTML = steroidPower - 10;
    console.log("Producing: " + steroidPower + " cookies per second!");
}


/********************************

          Facilities

********************************/
//set default values
let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;

//declare DOM variables
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

//game loop

//buy a facility
buyFacility.addEventListener("click", function()
{
    //set autoLoop to false
    facilityAuto = false;

    //make sure we have enough cookies
    if(cookieCount >= facilityPriceAmount)
    {
        cookieCount -= facilityPriceAmount;
        refreshCookieCount();

        //upgrade power level
        facilityLevelNumber += 1;

        //update price
        facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);

        //turn autoFacility on!
        facilityAuto = true;
        autoFacilityStart();

        //refresh shop item
        refreshFacility();
        //update facility power
        facilityPower += 600 + Math.floor(grandmaLevelNumber * 1.33);

    }

})

//game loop
let autoFacilityStart = function()
{
    let facilityInt = window.setInterval(function()
    {
        cookieCount += facilityPower;
        refreshCookieCount();
    }, 1000);
}

//refresh shop
let refreshFacility = function()
{
    facilityLevel.innerHTML = facilityLevelNumber;
    facilityPrice.innerHTML = facilityPriceAmount;
    facilityMultiple.innerHTML = facilityPower - 600;
}

// /********************************
//
//     Grandma Steroids
//
// ********************************/
// // set default values
//
// let steroidPriceAmount = 100;
// let steroidLevelNumber = 0;
// let steroidMultiplier = 1;
//
// //declare DOM variables
// let buySteroid = document.getElementById('buy-steroid');
// let steroidPrice = document.getElementById('steroid-price');
// let steroidLevel = document.getElementById('steroid-level');
// let steroidMultiple = document.getElementById('steroid-multiple');
//
// buySteroid.addEventListener("click", function()
// {
//     if(cookieCount >= homePrice)
//     {
//         cookieCount -= steroidPriceAmount;
//         refreshCookieCount();
//
//         //update level
//         steroidLevelNumber += 1;
//
//         //update price
//         steroidPriceAmount = Math.floor(steroidPriceAmount * 1.33);
//
//         //update steroid steroid multiplier
//         steroidMultiplier += 1;
//
//         //multiply grandma's power
//         grandmaPower = Math.floor(grandmaPower * steroidMultiplier)
//
//         refreshSteroid();
//
//     }
// })
//
// //refresh shop
// let refreshSteroid = function()
// {
//     steroidPrice.innerHTML = steroidPriceAmount;
//     steroidLevel.innerHTML = steroidLevelNumber;
//     steroidMultiple.innerHTML = steroidMultiplier;
// }
