var start = function () {
  var petrol, petrolRemaining, distCovered, totKm, move;

  petrol = [3, 20, 45, 65, 89]; // petrol pumps at 5 different positions.
  // petrol = prompt("add petrol pumps").split(","); // we can also get petrol pump value from user.
  // petrol = petrol.map(Number); // converting petrol pump values from prompt into numbers
  petrolRemaining = 30;
  distCovered = 0;
  totKm = 100; // total kms
  move = 0; // for counting move.

  function add(coveredKM) {
    distCovered += coveredKM;
  }
  var result = "";
  while (distCovered < totKm) {
    var km = Math.round(Math.random() * 6); // generating random numbers from 0 to 6.
    add(km);
    move++;
    petrolRemaining = petrolRemaining - km;
    if (petrol.includes(distCovered)) {
      petrolRemaining = petrolRemaining + 20;
      result += "Petrol Refilled" + "<br> <br>";
      // console.log(petrolRemaining); // for testing purpose only
    } else if (petrolRemaining < 1) {
      result += `
      Move  ${move} - Car at <b>${distCovered}</b> KM, Petrol Remaining: <b>${petrolRemaining}L</b> <br>
      --------------------------------------  <br>`;
      result += "Game Over"; // using template literals
      break;
    } else if (distCovered >= 100) {
      result += `
        Move  ${move} - Car at <b>${distCovered}</b> KM, Petrol Remaining: <b>${petrolRemaining}L</b> <br> 
        ------------------------------------<br>`;
      result += "Reached";
      break;
    }
    if (petrolRemaining < 1) {
      result += `
        Move  ${move} - Car at <b>${distCovered}</b> KM, Petrol Remaining: <b>${petrolRemaining}L</b> <br>
        ------------------------------------ <br>`;
    } else {
      result += `Move ${move} - Car at <b>${distCovered}</b> KM, Petrol Remaining: <b>${petrolRemaining}L</b> <br> 
          ---------------------------------- <br>  `;
    }
  }
  document.querySelector(".gameData").innerHTML =
    "Game Started <br> <br> Petrol pump generated at: " +
    petrol +
    "<br> <br>" +
    result;
  document.querySelector(".gameData").style.display = "block";
};

document.querySelector(".gameData").style.display = "none";

document.querySelector("#start").addEventListener("click", start);
