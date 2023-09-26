// gets each of the elemenets needed for the buttons
const pressBtn = document.querySelector("#number-button");
const upgradeBtn = document.querySelector("#upgrade-button");
const upgradeNum = document.querySelector(".press-btn");

//sets global variables to be aable to keep count of the clicks and upgrades
let numPress = 1;
let numUpgrade = 10;

//added click event to press btn so tha when every time you click
pressBtn.addEventListener("click", function () {
  const number = pressBtn.textContent;
  //it grabs the number from the text content of the button element and then
  pressBtn.textContent = Number(number) + numPress;
  //feeds that back to the text content but updated using the number varble we just got and the global varible
});

//adding click event to the upgrade button so that
upgradeBtn.addEventListener("click", function () {
  //we can create variable of the text content for each element
  const numOne = pressBtn.textContent;
  const numTwo = upgradeNum.textContent;
  //pass those to number through an if statement to check if the counter number is lower than the upgarde button so that you can't upgrade without the right amount of counts
  if (Number(numOne) < Number(numTwo)) {
    //this just returns when you click it so it doesn't go any further... upon reflection, probably don't need this
    return;
    //below checks if the button amount is higher than the upgrade amount, it does this by
  } else if (Number(numOne) >= Number(numTwo)) {
    //getting the number from the press btn element
    const num = pressBtn.textContent;
    //this is then changing the press btn amount so it looks like the upgrade has been "paid for"
    pressBtn.textContent = Number(num) - numUpgrade;
    //we run the function to update the global varables
    updateNum();
    //we then update the text content of the upgrade btn to show the new upgrade price
    upgradeNum.textContent = numUpgrade;
  }
});

// This function just updates the globale variables so that when you press upgrade, it doubles the upgrade csta dn what you get from tapping each button
const updateNum = function () {
  numPress = numPress * 2;
  numUpgrade = numUpgrade * 2;
};

//iLi's js//
const sunIcon = document.getElementById("sun-icon");

upgradeBtn.addEventListener("click", () => {
  sunIcon.style.fill =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
  //Random Hex Color Code Generator//
});
