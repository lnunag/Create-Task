let total = 0;
let x = 0;
let userscore = 0;
let botscore = 0;
let name = "User";
let number = 0;
let n = 0;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function process() {
  editValues();
  number = numbers[n];
  if (total != 100) {
    if ((total + numbers[n]) < 101) {
      total += numbers[n];
      x = bot();
      if (total >= 100) {
        userVictory();
        return;
      }
      while (x + total > 100) {
        x = bot();
      }
      total += x;
      if (total == 100) {
        aiVictory();
        return;
      }
    }
    end();
  }
}

function changeName() {
  let username = document.getElementById("username");
  name = prompt("What is your name?");
  username.innerHTML = name;
}

function botWin() {

}

function end() {
  editValues();
  p.innerHTML = "Total: " + total;
  text.innerHTML = name + " added " + number + "<br/>" + "A.I. added " + x;
}

function userVictory() {
  p.innerHTML = "Total: " + total;
  userscore++;
  uscore.innerHTML = userscore;
  text.innerHTML = name + " added " + number + "<br/>" + name + " has won";
}

function aiVictory() {
  editValues();
  p.innerHTML = "Total: " + total;
  botscore++;
  bscore.innerHTML = botscore;
  text.innerHTML = name + " added " + number + "<br/>" + "A.I. added " + x + "<br/>" + "A.I. has won";
}

function bot() {
  x = Math.floor((Math.random() * 10) + 1);
  return(x);
}

function editValues() {
  p = document.getElementById("display");
  uscore = document.getElementById("user");
  bscore = document.getElementById("bot");
  text = document.getElementById("text");
}

function b1() {
  n = 0;
  process();
}

function b2() {
  n = 1;
  process();
}

function b3() {
  n = 2;
  process();
}

function b4() {
  n = 3;
  process();
}

function b5() {
  n = 4;
  process();
}

function b6() {
  n = 5;
  process();
}

function b7() {
  n = 6;
  process();
}

function b8() {
  n = 7;
  process();
}

function b9() {
  n = 8;
  process();
}

function b10() {
  n = 9;
  process();
}

function reset() {
  let p = document.getElementById("display");
  total = 0;
  p.innerHTML = "Total: " + total;
}
