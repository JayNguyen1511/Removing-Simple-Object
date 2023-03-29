

/*  // checking the time after pressing generate button\

<label for="countdown-input">Countdown from:</label>
    <input type="number" id="countdown-input" />
    <button onclick="timecounting()" id = "a";>Starting time </button>
function timecounting(number){
  let input = document.getElementById("countdown-input")
  let number = input.value
  let countdown = setInterval(function() {
    console.log(number);
    number--;
    input.document.getElementById("a")
    input--;
    if (input < 0) {
      clearInterval(countdown);
      alert('Time up motherfucker')
    }
  }, 1000);
}
**/

// Create a function to generate shapes
function generate() {
  if (document.getElementById("square").checked) {
    for (i = 0; i < 100; i++) {
      genSquare();
    }
  } else if (document.getElementById("circle").checked) {
    for (i = 0; i < 100; i++) {
      genCircle();
    }
  } else if (document.getElementById("random").checked) {
    for (i = 0; i < 100; i++) {
      var rand = Math.floor(Math.random() * 2);
      if (rand == 0) {
        genSquare();
      } else {
        genCircle();
      }
    }
  } else {
    alert("Please choose a valid option.");
  }
}

function genSquare() {
  var container = document.getElementById("container");
  var newDiv = document.createElement("div");
  newDiv.className = "newDiv";
  var left = Math.floor(Math.random() * 400);
  var top = 200 + Math.floor(Math.random() * 400);
  newDiv.style.left = left + "px";
  newDiv.style.top = top + "px";
  newDiv.style.width = 50 + "px";
  newDiv.style.height = 50 + "px";
  newDiv.style.position = "absolute";
  newDiv.style.backgroundColor =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
  newDiv.addEventListener("mouseover", removeShape);
  container.appendChild(newDiv);
  console.log(newDiv);
}

function genCircle() {
  var container = document.getElementById("container");
  var newDiv = document.createElement("div");
  newDiv.className = "newDiv";
  var left = Math.floor(Math.random() * 400);
  var top = 200 + Math.floor(Math.random() * 400);
  newDiv.style.left = left + "px";
  newDiv.style.top = top + "px";
  newDiv.style.width = 50 + "px";
  newDiv.style.height = 50 + "px";
  newDiv.style.borderRadius = 50 + "%";
  newDiv.style.position = "absolute";
  newDiv.style.backgroundColor =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
  newDiv.addEventListener("mouseover", removeShape);
  container.appendChild(newDiv);
  console.log(newDiv);
}

// Create a function to remove shapes
function removeShape() {
  var count = document.getElementById("container").childElementCount;
  if (count > 1) {
    this.remove();
  } else {
    alert("This is the last child");
  }
}
