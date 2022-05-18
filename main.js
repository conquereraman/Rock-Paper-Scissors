var user = "";
function computer() {
  var choice = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
}
function evaluate(user, com) {
  if (user == com) {
    document.getElementById("result").innerHTML = "Its A Draw";
  } else if (user == "Rock" && com == "Paper") {
    document.getElementById("result").innerHTML = "Computer Wins";
  } else if (user == "Rock" && com == "Scissors") {
    document.getElementById("result").innerHTML = "You Win";
  } else if (user == "Paper" && com == "Rock") {
    document.getElementById("result").innerHTML = "You Win";
  } else if (user == "Paper" && com == "Scissors") {
    document.getElementById("result").innerHTML = "Computer Wins";
  } else if (user == "Scissors" && com == "Rock") {
    document.getElementById("result").innerHTML = "Computer Wins";
  } else if (user == "Scissors" && com == "Paper") {
    document.getElementById("result").innerHTML = "User Wins";
  } else {
    document.getElementById("result").innerHTML = "There Was Some Error";
  }
}
function rock() {
  user = "Rock";
  document.getElementById("user").innerHTML = "Rock";
  var com = computer();
  document.getElementById("com").innerHTML = com;
  evaluate(user, com);
}
function paper() {
  user = "Paper";
  document.getElementById("user").innerHTML = "Paper";
  var com = computer();
  document.getElementById("com").innerHTML = com;
  evaluate(user, com);
}
function scissors() {
  user = "Scissors";
  document.getElementById("user").innerHTML = "Scissors";
  var com = computer();
  document.getElementById("com").innerHTML = com;
  evaluate(user, com);
}
